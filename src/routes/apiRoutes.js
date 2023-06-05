import express from "express";

import { handleGetTrending, handlePostTrending } from "../controllers/apiController.js";

const router = express.Router();

const apiRoutes = (app) => {

    router.get('/trending', handleGetTrending);
    router.post('/trending', handlePostTrending);

    return app.use('/api/v1', router);
};

export default apiRoutes;