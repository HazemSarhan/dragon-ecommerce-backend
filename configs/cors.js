import cors from 'cors';

const corsConfig = () => {
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:5173',
        'https://dragon-ecommerce-frontend.vercel.app',
      ];
      if (!origin || allowedOrigins.indexOf(origin) !== 1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by cors'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'],
    credentials: true,
    preflightContinue: false,
    maxAge: 600,
    optionsSuccessStatus: 204,
  });
};

export default corsConfig;
