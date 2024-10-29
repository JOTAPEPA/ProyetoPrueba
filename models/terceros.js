import mongoose from 'mongoose'

const tercerosSchema = new mongoose.schema(
    {
        nombre: { type: String, required: true },
        identificacion: { type: String, required: true, unique: true },
        direccion: { type: String },
        telefono: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        tipo: { type: String, required: true }, //0 cliente, 1 proveedor//

    },
    {
        timestamps: true
    }
)

export default tercerosSchema