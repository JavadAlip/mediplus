import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/Auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

import http from "http";
import { Server } from "socket.io";
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("send-message", (message) => {
        console.log(message);

        //Brodcast the recieved message to all connected users
        io.emit("received-message", message)
    })

    socket.on("disconnect", () => console.log("User disconnected"))
});

server.listen(3000, () => console.log("server running at port 3000"))

// \--------------------------------------\
dotenv.config();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("API is working");
});

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed', err);
    }
}

// Middleware
app.use(express.json());
app.use(cookieParser());

// Define CORS options
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));

// Define routes
app.use('/api/v1/Auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

app.listen(port, () => {
    connectDB();
    console.log('Server is running on port ' + port);
});
