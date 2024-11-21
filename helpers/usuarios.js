import Usuario from "../models/usuarios.js";

const helperUsuario = {
    validarEmail: async (email) => {
        const existe = await Usuario.findOne({ email })
        if (existe) {
            throw new Error('El email ya existe')
        }
    },

    validarEmailPut: async (email, id) => {
        const existe = await Usuario.findOne({ email : email })
        if (existe && existe._id != id) {
            throw new Error('El email ya existe')
        }
    },
    validarId: async (id) => {
        const existe = await Usuario.findOne({ _id: id })
        if (!existe) {
            throw new Error('El id no existe')
        }
    },
}
export default helperUsuario