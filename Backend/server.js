 import express from 'express';
import connectDB from './Config/db.js';
import router from './Routes/remiderRoutes.js';
import cors from 'cors';


 const app = express();
 const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Database connection
connectDB();

// Import routes
app.use('/api/reminders', router);

app.listen(PORT, () => {    
    console.log(`Server is running on http://localhost:${PORT}`);
});




