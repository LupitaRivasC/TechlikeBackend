import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        //const url = 'mongodb+srv://Sistema_Productos:SistemaProductos.2024@cluster0.iu95u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect('mongodb://127.0.0.1/techlike')
        //await mongoose.connect(url);
        console.log("Base de datos conectada correctamente");
    } catch (error) {
        console.log(error);
    }
};
