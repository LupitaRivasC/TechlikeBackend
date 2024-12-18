import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    idProducto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
    },
    idCarrito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    },
    totalPedido: {
        type: Number,
        ref: "Cart",
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now,
    },
    estado: {
        type: String,
        required: true,
        enum: ['pendiente', 'procesando', 'completado', 'cancelado'],
    },
    correoUsuario: {
        type: String,
        required: true,
    },
    direccionUsuario: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Order", orderSchema);
