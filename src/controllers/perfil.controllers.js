import { unlink } from 'fs/promises';
import path from 'path';

// Función para obtener todos los perfiles
export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({ user: req.user.id });
    res.json(profiles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: ['Error al obtener los perfiles'] });
  }
};

// Función para crear un perfil
export const createProfile = async (req, res) => {
  try {
    if (!req.file || !req.file.filename) {
      return res.status(400).json({
        message: ['Error al crear un perfil, no se encontró la imagen'],
      });
    }

    const { fullName, email, state, gender, age, address } = req.body;
    const newProfile = new Profile({
      fullName,
      email,
      state,
      gender,
      age,
      address,
      image: req.file.filename,
      user: req.user.id,
    });
    const savedProfile = await newProfile.save();
    res.json(savedProfile);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ['Error al crear un perfil'] });
  }
};

// Función para obtener un perfil
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile)
      return res.status(404).json({ error: ['Perfil no encontrado'] });
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: ['Error al obtener el perfil'] });
  }
};

// Función para eliminar un perfil
export const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: ['Perfil no encontrado'] });
    }

    const image = profile.image;
    const ruta = path.resolve('./src/public/img') + '/' + image;

    try {
      await unlink(ruta); // Elimina la imagen usando unlink con promesas
    } catch (err) {
      console.error('Error al eliminar la imagen:', err.message);
    }

    return res.json({ message: 'Perfil eliminado correctamente', profile });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: ['Error al eliminar el perfil'] });
  }
};

// Función para editar un perfil
export const editProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!profile) {
      return res.status(404).json({ error: ['Perfil no encontrado'] });
    }
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: ['Error al actualizar el perfil'] });
  }
};

// Función para actualizar un perfil
export const updateProfile = async (req, res) => {
  try {
    if (!req.file || !req.file.filename) {
      console.log('No se encontró la imagen');
      return res.status(400).json({
        message: ['Error al actualizar un perfil, no se encontró la imagen'],
      });
    }

    const data = {
      fullName: req.body.fullName,
      email: req.body.email,
      state: req.body.state,
      gender: req.body.gender,
      age: req.body.age,
      address: req.body.address,
      image: req.file.filename,
      user: req.user.id,
    };

    const profile = await Profile.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!profile) {
      return res.status(404).json({ message: ['Perfil no encontrado'] });
    }

    const image = profile.image;
    const ruta = path.resolve('./src/public/img') + '/' + image;

    try {
      await unlink(ruta); // Elimina la imagen usando unlink con promesas
    } catch (err) {
      console.error(
        'Error al eliminar la imagen del perfil actualizado:',
        err.message
      );
    }

    return res.json({ message: 'Perfil actualizado correctamente', profile });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ['Error al actualizar un perfil'] });
  }
};
