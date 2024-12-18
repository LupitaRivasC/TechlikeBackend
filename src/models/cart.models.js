import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Asegúrate de que el modelo de Cliente está definido
        required: true,
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products", // Asegúrate de que el modelo de Producto está definido
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
        min: 1, // No se pueden agregar cantidades negativas o cero
    },
},{
    timestamps:true
});
export default mongoose.model("Carrito", cartSchema);