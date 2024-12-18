import {z} from 'zod';
export const productSchema = z.object({
    name: z.string({
        required_error: 'Nombre del producto requerido'
    }),
    price: z.string({
        required_error: 'Precio del producto requerido'
    }).optional(),
    description: z.string({
        required_error: 'Año del producto requerido'
    }),
    origin: z.string({
        required_error: 'Origen del producto requerido'
    }),
    category: z.string({
        required_error: 'Origen del producto requerido'
    }),
    quantity: z.string({
        required_error: 'Origen del producto requerido'
    }),

}); //Fin de productSchema

