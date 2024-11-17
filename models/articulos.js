import mongoose from "mongoose"; 


const articuloSchema = new mongoose.Schema({
    nombre: { type: String, required: true, maxlength: 50 },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    estado: { type: Number, default: 1 }, //1 activo 0 inactivo
},{
    timestamps: true,
})

export default mongoose.model('Articulo', articuloSchema)