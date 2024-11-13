import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
nombre: { type: String, required: true, maxlength: 50 },
    descripcion: { type: String, required:true},
    estado: { type: String, default: 1}, //1 activo 0 inactivo
},{
    timestamps: true,
})

export default mongoose.model('Categoria', categoriaSchema)