import Cart from "../models/cart.models.js";
import Product from "../models/products.models.js"; // Asumo que tienes este modelo para productos
import User from "../models/user.models.js"; // Asumo que tienes este modelo para usuarios

// Obtener el carrito del usuario
export const getCart = async (req, res) => {
    try {
        const carrito = await Cart.find({usuario:req.user.id}).populate('usuario').populate("producto");
        res.status(200).json(carrito);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: ['Error al obtener los carrito']});}
}

// Agregar un producto al carrito
export const addToCart = async (req, res) => {
    try {
        const { producto } = req.body;
        const carrito = await Cart.findOne({producto});
        console.log(carrito)

        if (!carrito){
            const newcarrito = new Cart({ 
            producto,
            usuario: req.user.id,
            cantidad:1
            })
            const carritoGuardado = await newcarrito.save()
        res.status(200).json(carritoGuardado);

        }
        else{
            
            const newcarrito = await Cart.findByIdAndUpdate(carrito._id,{ 
                producto,
                usuario: req.user.id,
                cantidad:carrito.cantidad+1
                })
        res.status(200).json(newcarrito);
        }
        
    } catch (error) {
        console.error("Error al agregar al carrito:", error);
        res.status(500).json({ error: "Error al agregar al carrito" });
    }
};

// Eliminar un producto del carrito
export const deleteCart = async (req, res) => {
    try {
        const carrito = await Cart.findByIdAndDelete(req.params.id);
        if (!carrito)
            return res.status(404).json({message: ["Carrito no encontrado"]});
        res.json(carrito);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: ['Error eliminar el carrito']});}
};