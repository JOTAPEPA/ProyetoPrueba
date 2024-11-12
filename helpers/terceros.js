import Terceros from '../models/terceros.js'

const helperTercero = {
    validarIdentificación: async (id) => {
        const existe = await Terceros.findOne({ identificacion: id })
        if (existe) {
           throw new Error('La identificación ya existe')
        }
        
    },

    validarEmail: async (email) => {
        const existe = await Terceros.findOne({ email: email })
        if (existe) {
           throw new Error('El email ya existe')
        }
        
    },
    validarId: async (id) => {
        const existe = await Terceros.findOne({ _id: id })
        if (!existe) {
           throw new Error('El id no existe')
        }
        
    },
}


export default helperTercero