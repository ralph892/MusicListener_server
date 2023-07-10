import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    name: String,
    image: String,
    type: Array,
    singer: String,
    genre: String,
    audio: String
});

const Musics = mongoose.model('Music', musicSchema);
export default Musics;