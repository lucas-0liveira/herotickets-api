import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb+srv://dev:j9P8FUW2nmmJC16m@cluster0.awcgvjr.mongodb.net/hero-tickets',
        );
        console.log('Connect database success');
    
    } catch (error) {
        console.log("🚀 ~ file: database.ts:5 ~ connect ~ error:", error)
    }
}