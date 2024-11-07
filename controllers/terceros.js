import Tercero from '../models/terceros.js'

const httpTerceros = {
    getListarTerceros: async (req, res) => {
        try {
        const listaTerceros = await Tercero.find()
            res.json(listaTerceros)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de terceros' })
        }
    },
    getListarTercerosPorId: async (req, res) => {
        try {
            const listaTerceros = await Tercero.findById(req.params.id)
            res.json({listaTerceros})
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de terceros por Id' })
        }
    },
    getListarActivos: async (req, res) => {
        try {
            const listaTerceros = await Tercero.find({ estado: 1 })
            res.json(listaTerceros)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de terceros activos' })
        }
    },
    getListarInactivos: async (req, res) => {
        try {
            const listaTerceros = await Tercero.find({ estado: 0 })
            res.json(listaTerceros)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de terceros inactivos' })
        }
    },

    getListarTipo: async (req, res) => {
        try {
            const listaTerceros = await Tercero.find({ tipo: req.params.tipo })
            res.json(listaTerceros)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de terceros por tipo' })
        }
    },
    postTerceros: async (req, res) => {
        try {
            const { nombre, identificacion, direccion, telefono, email, tipo } = req.body;
            const nuevo_Tercero = new Tercero({ nombre, identificacion, direccion, telefono, email, tipo });
             await nuevo_Tercero.save()
            res.json(nuevo_Tercero)
        } catch (error) {
            res.status(400).json({ error: 'Error al crear nuevo tercero' })
        }
    },

    putModificarTerceros: async (req, res) => {
        try {
            const {id} = req.params;
            const { nombre, identificacion, direccion, telefono, email, tipo } = req.body;
           let update = {nombre, identificacion, direccion, telefono, email, tipo}
           const terceroModificado = await Tercero.findByIdAndUpdate(id, update, { new: true });
           res.json(terceroModificado)
        } catch (error) {
            res.status(400).json({ error: 'Error al actualizar tercero' })
        }

    },

}

export default httpTerceros