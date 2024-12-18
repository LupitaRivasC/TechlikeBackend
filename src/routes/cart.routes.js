import express from "express";
import { getCart, addToCart, deleteCart } from "../controllers/cart.controllers.js";
import { authRequired } from "../middlewares/ValidateToken.js";


const router = express.Router();

// Ruta para obtener el carrito del usuario
router.get("/cart",authRequired, getCart);

// Ruta para agregar un producto al carrito
router.post("/cart",authRequired, addToCart);

// Ruta para eliminar un producto del carrito
router.delete("/cart/:id",  deleteCart);

export default router;
