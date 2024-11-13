import Usuario from "../models/usuarios.js";

const helperUsuario = {
    validarEmail: async (email) => {
        const existe = await Usuario.findOne({ email })
        if (existe) {
            throw new Error('El email ya existe')
        }
    }
}
export default helperUsuario