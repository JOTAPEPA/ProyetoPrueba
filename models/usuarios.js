import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Number,
        default: 1 //1 activo 0 inactivo
    }
},
{
    timestamps: true
}

)

export default mongoose.model('Usuario', usuarioSchema)