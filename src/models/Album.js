import mongoose from "mongoose";

const albumSchema = mongoose.Schema({
    name: String,
    country: String,
    singer: String,
    genre: String,
    year: Date,
    image: String,
    type: Array
});

const Albums = mongoose.model('Album', albumSchema);
export default Albums;