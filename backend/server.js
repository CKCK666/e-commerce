import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is on ${process.env.NODE_ENV} running on ${PORT}..........................`
  )
);
