import { Musics, Artists, Albums, PlayLists, Events } from "../models/index.js";


export const handlePostTrending = async (req, res) => {
    const trending = new Events({ name: 'bray' });

    await trending.save();

    return res.status(201).json('post successfully');
};

export const handleGetMusicTrendings = async (req, res) => {
    const musicTrendings = await Musics.find({ type: 'trending' });
    return res.status(201).json(musicTrendings);
};

export const handleGetArtistTrendings = async (req, res) => {
    const artistTrendings = await Artists.find({ type: 'trending' });
    return res.status(201).json(artistTrendings);
};

export const handleGetAlbumTrendings = async (req, res) => {
    const albumTrendings = await Albums.find({ type: 'trending' });
    return res.status(201).json(albumTrendings);
};


export const handleGetTopChart = async (req, res) => {
    const musicTopCharts = await Musics.find({ type: 'top chart' });
    return res.status(201).json(musicTopCharts);
};

export const handleGetNewReleases = async (req, res) => {
    const musicNewReleases = await Musics.find({ type: 'new release' });
    return res.status(201).json(musicNewReleases);
};

export const handleGetFeaturedArtists = async (req, res) => {
    const featuredArtists = await Artists.find({ type: 'featured' });
    return res.status(201).json(featuredArtists);
};

export const handleGetTopAlbums = async (req, res) => {
    const topAlbums = await Albums.find({ type: 'top chart' });
    return res.status(201).json(topAlbums);
};

export const handleGetPlayLists = async (req, res) => {
    const playLists = await PlayLists.find({});
    return res.status(201).json(playLists);
};

export const handleGetEvents = async (req, res) => {
    const events = await Events.find({});
    return res.status(201).json(events);
};

export const handlePostMusic = async (req, res) => {
    const music = new Musics({ name: 'Em của ngày hôm qua' });

    await music.save();

    return res.status(201).json('post successfully');
}

