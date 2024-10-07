import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './router/router.js';

dotenv.config();

const app = express();

// limit: limit size of images
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true })); 

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

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

const PORT = process.env.PORT || 3501;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to MongoDB`);
        console.log(`Server is running at port ${PORT}`);
    });
});
