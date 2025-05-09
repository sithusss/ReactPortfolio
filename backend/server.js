import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import projectRoutes from './routes/projectRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();
//mongoose.connect('mongodb://localhost:27017/portfolio');


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/projects', projectRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));