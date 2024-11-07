import mongoose from 'mongoose'

const tercerosSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        identificacion: { type: String, required: true, unique: true },
        direccion: { type: String },
        telefono: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        tipo: { type: String, required: true, default: 0 }, //0 cliente, 1 proveedor//
        estado: { type: Number, default: 1 }, //1 activo 0 inactivo

    },
    {
        timestamps: true
    }
)

export default mongoose.model('Tercero', tercerosSchema)