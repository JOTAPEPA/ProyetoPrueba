import articulo from '../models/articulos.js';

const httpArticulos = {

    postInsertar: async (req, res) => {
        try {
            const { nombre, precio, stock, categoria, estado } = req.body;
            const nuevoArticulo = new articulo({ nombre, precio, stock, categoria, estado });
            await nuevoArticulo.save()
            res.json(nuevoArticulo)
        } catch (error) {
            res.status(400).json({ error: 'Error al crear nuevo articulo' })
            console.log(error); 
        }
    },

    putModificar: async (req, res) => {
        try{
            const {id} = req.params;
            const { nombre, precio, stock, categoria, estado } = req.body;
            let update = {nombre, precio, stock, categoria, estado}
            const articuloModificado = await articulo.findByIdAndUpdate(id, update, {new: true});
            res.json(articuloModificado)
        }catch(error){
            res.status(400).json({error: 'Error al modificar articulo'})
            console.log(error);
        }
    },

    getListarTodos: async (req, res) => {
        
    }




}

export default httpArticulos