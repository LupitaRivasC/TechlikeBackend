import mongoose from 'mongoose';

export const connectDB = async () => {
        //const url ='mongodb://127.0.0.1/sistemainfo'
        //const url = 'mongodb+srv://Sistema_Productos:Sistema@cluster0.iu95u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        const url = process.env.MONGODB_URL;
        await mongoose.connect(url)
                      .then(()=>{
                        console.log("Base de datos conectada correctamente")
                    })
                    .catch ((err) => {
                        console.log(err)
                    })
                }
        //await mongoose.connect(url);
        //console.log("Base de datos conectada correctamente");
