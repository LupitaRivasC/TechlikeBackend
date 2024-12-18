import mongoose from "mongoose";

// Definición del esquema para los perfiles
const perfilSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true, // Campo obligatorio
    },
    email: {
        type: String,
        required: true, // Campo obligatorio
        unique: true, // Asegura que no haya duplicados
    },
    state: {
        type: String,
        required: true, // Campo obligatorio
    },
    gender: {
        type: String,
        required: true, // Campo obligatorio
        enum: ["MASCULINO", "FEMENINO", "OTROS"], // Opciones permitidas
    },
    age: {
        type: Number,
        required: true, // Campo obligatorio
        min: 0, // Edad mínima
    },
    address: {
        type: String,
        required: true, // Campo obligatorio
    },
    image: {
        type: String, // URL de la imagen
        required: true, // Campo obligatorio
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // Referencia a un documento de otra colección
        ref: "User", // Indica la colección referenciada
        required: true, // Campo obligatorio
    },
}, { timestamps: true }); // Agrega createdAt y updatedAt

// Exporta el modelo 'Profile' basado en el esquema 'perfilSchema'
export default mongoose.model("Profile", perfilSchema);
