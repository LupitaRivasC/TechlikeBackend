import Category from '../models/category.models.js';

// Obtener todas las categorías
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: ['Error al obtener las categorías'] });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newCategory = new Category({
      nombre,
      user: req.user.id,
    });
    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ['Error al crear un categoria'] });
  }
};

// Obtener una categoría por ID
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: ['Categoría no encontrada'] });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: ['Error al obtener la categoría'] });
  }
};

// Eliminar una categoría
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: ['Categoría no encontrada'] });
    }

    res.json({ message: 'Categoría eliminada correctamente', category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: ['Error al eliminar la categoría'] });
  }
};

// Actualizar una categoría
export const updateCategory = async (req, res) => {
  try {
      const category = await Category.findByIdAndUpdate(req.params.id, req.body);
      if (!category)
          return res.status(404).json({message: ["Reporte no encontrado"]});
      res.json(category);
  } catch (error) {
      console.log(error);
      res.status(500).json({message: ['Error al actualizar el category']});}
};