import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import router from '../router/router.js';

dotenv.config();

const app = express();

// Limit: limit size of images
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true })); 

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use("/api", router);

// Error handling middleware
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

// Default error handler
app.use((err, req, res) => {
    console.error(err);
    res.status(500).json({
        data: [],
        message: 'An unexpected error occurred',
        error: true,
        success: false,
    });
});

// Initialize database connection
let isConnected = false;

const connectAndStartServer = async () => {
    try {
        await connectDB();
        isConnected = true; // Set to true after successful connection
        console.log('Connected to MongoDB');
        const port = process.env.PORT || 3501;
        app.listen(port, () => {
            console.log(`Server is running at port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

// Call the function to start the server
connectAndStartServer();
