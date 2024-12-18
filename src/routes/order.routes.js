import { Router } from 'express';
import { authRequired } from '../middlewares/ValidateToken.js';
import { getOrders, getOrder, updateOrderStatus } from '../controllers/order.controllers.js  ';
import { validateSchema } from '../middlewares/validator.middleware.js';
const router = Router();

// Obtener todos los pedidos
router.get('/orders', authRequired, getOrders);

// Obtener un pedido por id
router.get('/orders/:id', authRequired, getOrder);

// Actualizar el estado de un pedido
router.put('/orders/:id/status', authRequired, validateSchema(orderStatusSchema), updateOrderStatus);

export default router;
