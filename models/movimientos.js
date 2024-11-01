import mongoose from "mongoose";

const movimientosSchema = new mongoose.Schema({
    tipo: { type: Number, required: true, default: 1 }, //1.entrada 2.salida 3.devolucion de entrada 4.devolucion de salida
    numeroFactura:{ type: Number, required: true, unique: true },
    fecha:{ type: Date, required: true },
    articulos: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'articulo',
                required: true
            },
            cantidad: { type: Number, required: true },
            precio: { type: Number, required: true }
        }
    ],
    valor:{ type: Number, required: true },
    iva:{ type: Number, required: true },
    total:{ type: Number, required: true },
    estado: { type: Number, default: 1 }, //1 activo 0 inactivo

})

export default mongoose.model('Movimiento', movimientosSchema)
