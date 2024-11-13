import Articulo from "../models/articulos.js";

const helperArticulos = {
    validarId: async (id) => {
        const articulo = await Articulo.findById(id)
        if (articulo) {
            return true
        } else {
            return false
        }

    },
}

export default helperArticulos