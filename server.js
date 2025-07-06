import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

// Important Packages
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import corsConfig from './configs/cors.js';

// Middleware
import notFoundMiddleware from './middleware/not.found.js';
import errorHandlerMiddleware from './middleware/error.handler.js';

// Routes
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import categoryRoutes from './routes/category.routes.js';

app.set('trust proxy', 1);
app.use(corsConfig());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser(process.env.JWT_SECRET));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/category', categoryRoutes);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
