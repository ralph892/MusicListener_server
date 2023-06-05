import { Trendings } from "../models/index.js";

export const handleGetTrending = async (req, res) => {
    const trending = await Trendings.find({});

    return res.status(400).json(trending);
};

export const handlePostTrending = async (req, res) => {
    const trending = new Trendings({ name: 'bray' });

    await trending.save();

    return res.status(401).json('post successfully');
}