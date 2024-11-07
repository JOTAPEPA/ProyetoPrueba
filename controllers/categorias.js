import { get } from 'mongoose';
import categoria from '../models/categoria';

const httpCategorias = {

    postInsertar: async (req, res) => {
        try {
            const { nombre, descripcion, estado } = req.body;
            const nuevaCategoria = new categoria({ nombre, descripcion, estado });
            await nuevaCategoria.save()
            res.json(nuevaCategoria)
        } catch (error) {
            res.status(400).json({ error: 'Error al crear nueva categoria' })
            console.log(error);
        }
    },

    putModificar: async (req, res) => {
        try {
            const { id } = req.params;
            const { nombre, descripcion, estado } = req.body;
            let update = { nombre, descripcion, estado }
            const categoriaModificada = await categoria.findByIdAndUpdate(id, update, { new: true });
            res.json(categoriaModificada)
        } catch (error) {
            res.status(400).json({ error: 'Error al modificar categoria' })
            console.log(error);
        }
    },

    getListarTodos: async (req, res) => {
        try {
            const listarTodos = await categoria.find()
            res.json(listarTodos)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de categorias' })
            console.log(error);
        }
    },

    getListarXId: async (req, res) => {
        try {
            const listarXId = await categoria.findById(req.params.id)
            res.json(listarXId)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener categoria por id' })
            console.log(error);
        }
    },

    getListarActivos: async (req, res) => {
        try {
            const listarActivos = await categoria.find({ estado: 1 })
            res.json(listarActivos)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de categorias activas' })
            console.log(error);
        }
    },

    getListarInactivos: async (req, res) => {
        try {
            const listarInactivos = await categoria.find({ estado: 0 })
            res.json(listarInactivos)
        } catch (error) {
            res.status(400).json({ error: 'Error al obtener lista de categorias inactivas' })
            console.log(error);
        }
    },

    putModificarInactivo: async (req, res) => {
        try {
            const { id } = req.params;
            const categoriaInactiva = await categoria.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json(categoriaInactiva)
        } catch (error) {
            res.status(400).json({ error: 'Error al desactivar categoria' })
            console.log(error);
        }
    },

    putModificarActivo: async (req, res) => {
        try {
            const { id } = req.params;
            const categoriaActiva = await categoria.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json(categoriaActiva)
        } catch (error) {
            res.status(400).json({ error: 'Error al activar categoria' })
            console.log(error);
        }

    }
}