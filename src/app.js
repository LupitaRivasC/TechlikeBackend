import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/products.routes.js';
import categoryRoutes from './routes/category.routes.js';
import cartRoutes from './routes/cart.routes.js';

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4000','http://localhost',
   process.env.BASE_URL_BACKEND,
   process.env.BASE_URL_FRONTEND],
 credentials: true
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

app.get('/',(req,res) =>{
  res.json({
      mensaje: "Bienvenido al API REST de Productos",
      version: "1.0.0",
      rutasDisponibles: [
        { endpoint: "/api/register", metodo: "POST", descripcion: "Crea un nuevo usuario" },
        { endpoint: "/api/login", metodo: "POST", descripcion: "Para iniciar sesión" },
      ],
  })
})
export default app;
