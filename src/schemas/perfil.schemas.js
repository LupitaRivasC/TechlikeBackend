import { z } from 'zod';

export const profileSchema = z.object({
  fullName: z.string({
    required_error: 'Nombre completo es requerido',
  }),
  email: z.string({
    required_error: 'Correo electrónico es requerido',
  }).email('Correo electrónico inválido'),
  state: z.string({
    required_error: 'Estado es requerido',
  }),
  gender: z.enum(['MASCULINO', 'FEMENINO', 'OTROS'], {
    required_error: 'Género es requerido',
  }),
  age: z.number({
    required_error: 'Edad es requerida',
  }).min(0, 'La edad debe ser un número positivo'),
  address: z.string({
    required_error: 'Dirección es requerida',
  }),
  image: z.string({
    required_error: 'Imagen es requerida',
  }),
}); //Fin de profileSchema
