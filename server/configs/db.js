import mongoose from "mongoose";

const connectDB = async ()=> {
    try{
        mongoose.connection.on('connected', () => console.log("Database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking-master`)
    } catch (err){
        console.log(err.message);
    }
}

export default connectDB;