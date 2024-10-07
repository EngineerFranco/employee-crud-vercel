import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import router from '../router/router.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true })); 

app.use(cors({
    origin: 'https://employee-crud-vercel.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
}));

app.options('*', cors()); 
app.use("/api", router);


app.use((err, req, res, next) => {
    if (err.name === 'PayloadTooLargeError') {
        return res.status(413).json({
            data: [],
            message: 'Payload too large',
            error: true,
            success: false,
        });
    }
    next(err); 
});


app.use((err, req, res) => {
    console.error(err);
    res.status(500).json({
        data: [],
        message: 'An unexpected error occurred',
        error: true,
        success: false,
    });
});


let isConnected = false;

const connectAndStartServer = async () => {
    if (!isConnected) {
        try {
            await connectDB();
            isConnected = true; 
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error.message);
            process.exit(1); 
        }
    }
};


export default async (req, res) => {
    await connectAndStartServer();
    app(req, res); 
};
