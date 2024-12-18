import app from './app.js';
import { connectDB} from './db.js';

connectDB();
const POST = process.env.POST ||4000;
app.listen(POST);
console.log('Servidor corriendo en el puerto'+POST)