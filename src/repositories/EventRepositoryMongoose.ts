import mongoose from "mongoose";
import { Event } from "../entities/Event";
import { EventRepository } from "./EventRepository";

const eventShema = new mongoose.Schema({
    title: String,
    location: {
        latitude: String,
        longitude: String,
    },
    date: Date,
    createAt:{
        type: Date,
        default: Date.now,
    },
    description: String,
    categories: [String],
    banner: String,
    flyers: [String],
    price: {
        type: Array,
    },
    city: String,
    participants: {
        type: Array,
        ref: 'User',
    },
});

const EventModel = mongoose.model('Event', eventShema);

class EventRepositoryMongoose implements EventRepository{
    async add(event: Event): Promise<Event> {
        const eventModel = new EventModel(event);

        await eventModel.save;
        return event;
    }
}
export { EventRepositoryMongoose };