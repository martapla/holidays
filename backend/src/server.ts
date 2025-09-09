import express from 'express'; 
import dotenv from 'dotenv'; 
import { connectDB } from './database';
import taskRoutes from './routes/task.routes';
import cors from 'cors'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect to the database MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());


// Middleware CORS
app.use(cors({
  origin: "http://localhost:5173" // frontend
}));


// Use routes
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);








