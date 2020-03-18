import { addHours } from "date-fns";
import { User, UserSession } from "#root/db/models";

import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";
import passwordCompareSync from "#root/helpers/passwordCompareSync";

const USER_SESSION_EXPIRATION = 1; // 1 hour

const setupRoutes = app => {
    app.post("/sessions", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid email or password"));
        }

        try {
            const user = await User.findOne({
                attributes: {},
                where: {
                    email: req.body.email
                }
            });

            if (!user) {
                return next(new Error("User not found"));
            }

            if (!passwordCompareSync(req.body.password, user.passwordHash)) {
                return next(new Error("Invalid password"));
            }

            const expiresAt = addHours(new Date(), USER_SESSION_EXPIRATION);
            const sessionToken = generateUUID();

            const userSession = await UserSession.create({
                id: sessionToken,
                userId: user.id,
                expiresAt
            });

            return res.json(userSession);
        } catch (err) {
            return next(err);
        }
    });

    app.post("/users", async (req, res, next) => {
        if (!req.body.email || !req.body.password) {
            return next(new Error("Invalid email or password"));
        }

        try {
            const user = await User.create({
                id: generateUUID(),
                email: req.body.email,
                passwordHash: hashPassword(req.body.password),
            });

            return res.json(user);
        } catch (err) {
            return next(err);
        }
    });
};

export default setupRoutes;
