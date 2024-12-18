import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/category.routes.js';
import cartRoutes from './routes/cart.routes.js';
import perfilRoutes from './routes/perfil.routes.js';

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4000'],
  credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, 'public/img')));

// Rutas
app.use('/api/', authRoutes);
app.use('/api/', productRoutes);
app.use('/api/', categoryRoutes);
app.use('/api/', cartRoutes);
app.use('/api/',perfilRoutes)
export default app;
