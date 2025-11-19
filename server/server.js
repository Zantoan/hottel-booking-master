import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhook from './controllers/clerkWebhooks.js';

connectDB()

const app = express()

app.use(cors())
//middlewares
app.use(express.json())
app.use(clerkMiddleware())

//API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhook);

app.get('/',(req, res)=> res.send("API is working "))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});