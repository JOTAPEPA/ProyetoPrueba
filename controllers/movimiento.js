import Movimiento from '../models/movimientos.js'

const httpMovimiento = {
    getListarMovimientos: async (req, res) => {
        try {
            const listaMovimientos = await Movimiento.find()
            res.json(listaMovimientos)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de movimientos' })
        }
    },
    getListarMovimientosPorId: async (req, res) => {
        try {
            const listaMovimientos = await Movimiento.findById(req.params.id)
            res.json({listaMovimientos})
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de movimientos por Id' })
        }
    },
    getListarAprobados: async (req, res) => {
        try {
            const listaMovimientos = await Movimiento.find({ estado: 1 })
            res.json(listaMovimientos)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de movimientos aprobados' })
        }
    },
    getListarAnulados: async (req, res) => {
        try {
            const listaMovimientos = await Movimiento.find({ estado: 0 })
            res.json(listaMovimientos)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de movimientos anulados' })
        }
    },      
    getListarMovimientosTipo: async (req, res) => {
        try {
            const tipo = req.params.tipo
            const listaMovimientos = await Movimiento.find({ tipo: tipo })
            res.json(listaMovimientos)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de movimientos por tipo' })
        }
    },
    getListarMovimientosPorFecha: async (req, res) => {
        try {
            const { fechaInicio, fechaFin } = req.params;
            
            const listaMovimientos = await Movimiento.find({
                fecha: {
                    $gte: new Date(fechaInicio),
                    $lte: new Date(fechaFin)
                }
            });
            
            res.json(listaMovimientos);
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de movimientos por rango de fechas' });
        }
    },
    getTotalvendido: async (req, res) => {
        try {
            const { fechaInicio, fechaFin } = req.params;
            const listaMovimientos = await Movimiento.find({
                fecha: {
                    $gte: new Date(fechaInicio),
                    $lte: new Date(fechaFin)
                },
                tipo: 2
            });
            const totalVendido = listaMovimientos.reduce((acum, movimiento) => acum + movimiento.valor, 0);
            res.json(totalVendido);
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener total de ventas' });
        }
    },

    postMovimiento: async (req, res) => {
        try {
            const { tipo, numeroFactura, fecha, articulos, valor, iva, total } = req.body;
            const nuevo_Movimiento = new Movimiento({ tipo, numeroFactura, fecha, articulos, valor, iva, total });
            await nuevo_Movimiento.save();
            res.json(nuevo_Movimiento);
        } catch (error) {
            res.status(400).json({ error: 'Error al crear nuevo movimiento' });
        }
    },
    putModificarMovimiento: async (req, res) => {
        try {
            const { id } = req.params;
            const { tipo, numeroFactura, fecha, articulos, valor, iva, total } = req.body;
            let update =  { tipo, numeroFactura, fecha, articulos, valor, iva, total }
            const movimientoModificado = await Movimiento.findByIdAndUpdate(id, update, { new: true });
            res.json(movimientoModificado);
        } catch (error) {
            res.status(400).json({ error: 'Error al actualizar movimiento' });
        }
    },
    putModificarAnulado: async (req, res) => {
        try {
            const { id } = req.params;
            const movimientoAnulado = await Movimiento.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json(movimientoAnulado);
        } catch (error) {
            res.status(400).json({ error: 'Error al anular movimiento' });
        }
    },
    putModificarAprobado: async (req, res) => {
        try {
            const { id } = req.params;
            const movimientoAprobado = await Movimiento.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json(movimientoAprobado);
        } catch (error) {
            res.status(400).json({ error: 'Error al aprobar movimiento' });
        }
    },

    putModificarDevolucion: async (req, res) => {
        try {
            const { id } = req.params;
            const movimientoDevolucion = await Movimiento.findByIdAndUpdate(id, { tipo: 4 }, { new: true });
            res.json(movimientoDevolucion);
        } catch (error) {
            res.status(400).json({ error: 'Error al devolver movimiento' });
        }
    },

}

export default httpMovimiento
