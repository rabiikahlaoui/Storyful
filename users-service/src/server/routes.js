import { User } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
import hashPassword from "#root/helpers/hashPassword";

const setupRoutes = app => {
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
