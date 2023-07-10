import mongoose from "mongoose";

const artistSchema = mongoose.Schema({
    name: String,
    country: String,
    gender: String,
    birthDay: Date,
    image: String,
    type: Array
});

const Artists = mongoose.model('Artist', artistSchema);
export default Artists;

