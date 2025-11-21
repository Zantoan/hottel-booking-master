import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';
import userRouter from './routers/userRoutes.js';
import hotelRouter from './routers/hotelRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import roomRouter from './routers/roomRoutes.js';
import bookingRouter from './routers/bookingRoutes.js';

connectDB()
connectCloudinary();

const app = express()

app.use(cors())
//middlewares
app.use(express.json())
app.use(clerkMiddleware())

//API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks);

app.get('/',(req, res)=> res.send("API is working right"))
app.use("/api/user", userRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/rooms", roomRouter)
app.use("/api/bookings", bookingRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});