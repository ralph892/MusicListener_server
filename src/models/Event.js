import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name: String,
    image: String,
    place: String,
    information: {
        email: String,
        phone: String,
        seats: Number
    },
    description: String,
    date: Date,
    participants: Number,
});

const Events = mongoose.model('Event', eventSchema);
export default Events;