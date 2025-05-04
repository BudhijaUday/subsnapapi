import express from 'express'
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import workflowRouter from './routes/workflows.routes.js';
// import workflowRouter from './routes/workflows.routes.js';
// import arcjetMiddleware from './middlewares/arcjet.middleware.js';

// import dotenv from 'dotenv';
// dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(arcjetMiddleware);

// Middleware
app.use(express.json());

// Routes
// app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);
app.use('/api/v1/workflows', workflowRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send(`Welcome`)
});

app.listen(PORT, async() => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
  
    await connectToDatabase();
  });
  

export default app;