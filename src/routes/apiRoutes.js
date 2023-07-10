import express from "express";

import {
    handleGetTopChart,
    handleGetNewReleases,
    handlePostMusic,
    handlePostTrending,
    handleGetMusicTrendings,
    handleGetArtistTrendings,
    handleGetAlbumTrendings,
    handleGetFeaturedArtists,
    handleGetTopAlbums,
    handleGetPlayLists,
    handleGetEvents
} from "../controllers/apiController.js";

const router = express.Router();

const apiRoutes = (app) => {

    router.post('/trending', handlePostTrending);
    router.get('/musicTrendings', handleGetMusicTrendings);
    router.get('/artistTrendings', handleGetArtistTrendings);
    router.get('/albumTrendings', handleGetAlbumTrendings);
    router.get('/topCharts', handleGetTopChart);
    router.get('/newReleases', handleGetNewReleases);
    router.get('/featuredArtists', handleGetFeaturedArtists);
    router.get('/topAlbums', handleGetTopAlbums);
    router.get('/playLists', handleGetPlayLists);
    router.get('/events', handleGetEvents);
    router.post('/music', handlePostMusic);

    return app.use('/api/v1', router);
};

export default apiRoutes;