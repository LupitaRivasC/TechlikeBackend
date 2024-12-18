import { Router } from 'express';
import { authRequired } from '../middlewares/ValidateToken.js';
import {
  getProfiles,
  createProfile,
  getProfile,
  deleteProfile,
  editProfile,
  updateProfile,
} from '../controllers/perfil.controllers.js';
import { profileSchema } from '../schemas/perfil.schemas.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { uploadImage } from '../middlewares/uploadImage.middleware.js';

const router = Router();

// Obtener todos los perfiles
router.get('/profiles', authRequired, getProfiles);

// Agregar un perfil
router.post('/profiles', authRequired, uploadImage, validateSchema(profileSchema), createProfile);

// Obtener un perfil por id
router.get('/profiles/:id', authRequired, getProfile);

// Eliminar un perfil
router.delete('/profiles/:id', authRequired, deleteProfile);

// Actualizar un perfil
router.put('/profiles/:id', authRequired, uploadImage, validateSchema(profileSchema), updateProfile);

export default router;
