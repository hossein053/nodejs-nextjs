import express from "express";
import { api } from "./routes";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
const port = 3002;
const mongoURI = 'mongodb://127.0.0.1:27017/production';

mongoose.connect(mongoURI).then(() => {
    console.log('Connecting to MongoDB')

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors())
    app.use(api);
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    })

}).catch((err: any) => {
    console.error('Error connecting to MongoDB:', err)
});