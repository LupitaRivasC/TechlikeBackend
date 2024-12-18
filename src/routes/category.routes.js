import { Router } from 'express';
import { authRequired } from '../middlewares/ValidateToken.js';
import {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from '../controllers/category.controllers.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { categorySchema } from '../schemas/category.schemas.js';

const router = Router();

router.get('/categories', authRequired, getCategories);
router.post('/categories', authRequired, validateSchema(categorySchema), createCategory);
router.get('/categories/:id', authRequired, getCategory);
router.delete('/categories/:id', authRequired, deleteCategory);
router.put('/categories/:id', authRequired, validateSchema(categorySchema), updateCategory);

export default router;
