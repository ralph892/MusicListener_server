import mongoose from "mongoose";

const playListSchema = mongoose.Schema({
    name: String,
    image: String,
    songs: Array,
    favorite: Number,
    rate: Number
});

const PlayLists = mongoose.model('PlayList', playListSchema);
export default PlayLists;