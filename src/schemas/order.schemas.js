import { z } from 'zod';

export const orderSchema = z.object({
    products: z.array(
        z.object({
            productId: z.string({
                required_error: 'ID del producto requerido'
            }),
            quantity: z.number({
                required_error: 'Cantidad del producto requerida'
            }),
            price: z.string({
                required_error: 'Precio del producto requerido'
            }),
        })
    ),
    total: z.string({
        required_error: 'Total del pedido requerido'
    }),
    userId: z.string({
        required_error: 'ID del usuario requerido'
    }),
    status: z.string({
        required_error: 'Estado del pedido requerido'
    })
});
