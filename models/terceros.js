import mongoose from 'mongoose'

const tercerosSchema = new mongoose.Schema(
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

<<<<<<< HEAD
export default tercerosSchema               
=======
export default mongoose.model('Tercero', tercerosSchema)
>>>>>>> 2b36a74a68f0f67e5ee79b5689382e65e4610f98
