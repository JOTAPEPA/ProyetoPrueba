import Terceros from '../models/terceros.js'

const helperTercero = {
    validarIdentificacionPut: async (identificacion, id) => {
        console.log("cedula ",identificacion);
        console.log("id ",id);
        
        const existe = await Terceros.findOne({ identificacion })
        if (existe && existe._id != id) {
           throw new Error('La identificación ya existe')
        }
        
    },
    validarIdentificacion: async (id) => {
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
    validarEmailPut: async (email, id) => {
        const existe = await Terceros.findOne({ email: email })
        if (existe && existe._id != id) {
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