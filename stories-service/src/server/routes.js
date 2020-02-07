import { Stories } from "#root/db/models";

const setupRoutes = app => {
    app.get("/stories", async (req, res, next) => {
        const stories = await Stories.findAll();
        return res.json(stories);
    });
};

export default setupRoutes;
