import Movimientos from "../models/movimientos.js";

const helperMovimiento = {
    validarId: async (id) => {
        const movimiento = await Movimientos.findById(id)
        if (movimiento) {
            return true
        } else {
            return false
        }
    },
    validarNumeroFactura: async (numeroFactura) => {
        const existe = await Movimientos.findOne({ numeroFactura: numeroFactura })
        if (existe) {
            throw new Error('El numero de factura ya existe')
        }
    },
    
}
export default helperMovimiento