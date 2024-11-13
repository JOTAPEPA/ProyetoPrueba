import Categoria from '../models/categoria.js';

const helperCategorias = {
    validarId: async (id) => {
        const categoria = await Categoria.findById(id);
        if (categoria) {
            return true;
        } else {
            return false;
        }
    },
}

export default helperCategorias;