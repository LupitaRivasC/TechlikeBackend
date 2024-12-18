import { z } from 'zod';

export const categorySchema = z.object({
  nombre: z.string({
    required_error: 'El nombre de la categoría es obligatorio',
  }),
});