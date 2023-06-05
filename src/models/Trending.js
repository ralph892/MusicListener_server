import mongoose from "mongoose"

const trendingSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String }
});

const Trendings = mongoose.model('Trending', trendingSchema);

export default Trendings;