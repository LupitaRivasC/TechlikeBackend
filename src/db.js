import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        //const url = 'mongodb+srv://techlike:techlike12345@cluster0.wkwol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        //const url = 'mongodb://127.0.0.1/techlike';
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
};
