import { Router } from 'express'
import httpTerceros from '../controllers/terceros.js'
import middlewareValidar from '../middleware/validar_datos.js'
import { check } from 'express-validator'
import helperTercero from '../helpers/terceros.js'
const router = Router()

router.get('/',[
    middlewareValidar
], httpTerceros.getListarTerceros)

router.get('/:id',[
  check("id", "Id no valido").isMongoId(),
  check("id", "no existe ena base de datos").custom(helperTercero.validarId)  
], httpTerceros.getListarTercerosPorId)

router.get('/activos',[
    middlewareValidar
], httpTerceros.getListarActivos)

router.get('/inactivos',[
    middlewareValidar
], httpTerceros.getListarInactivos)

router.get('/:tipo',[
    middlewareValidar
], httpTerceros.getListarTipo)

router.post('/',[
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("identificacion", "El identificacion es obligatorio").notEmpty(),
    check("identificacion", "El identificacion debe ser unico").custom(helperTercero.validarIdentificación),
    check("direccion", "La direccion es obligatoria").notEmpty(),
    check("telefono", "El telefono es obligatorio").notEmpty(),
    check("email", "El email es obligatorio").notEmpty(),
    check("email", "El email debe ser unico").custom(helperTercero.validarEmail),
    check("tipo", "El tipo es obligatorio").notEmpty(),
    middlewareValidar
    ], httpTerceros.postTerceros)

router.put('/:id',[
    check("nombre", "El nombre es obligatorio").optional().notEmpty(),
    check("identificacion", "La identificación debe ser única").optional().custom(helperTercero.validarIdentificación),
    check("direccion", "La dirección es obligatoria").optional().notEmpty(),
    check("telefono", "El teléfono es obligatorio").optional().notEmpty(),
    check("email", "El email es obligatorio").optional().notEmpty(),
    check("email", "El email debe ser único").optional().custom(helperTercero.validarEmail),
    check("tipo", "El tipo es obligatorio").optional().notEmpty(),
    middlewareValidar
], httpTerceros.putModificarTerceros)

router.put('/activo/:id',[
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe ena base de datos").custom(helperTercero.validarId)  
], httpTerceros.putModificarActivo)

router.put('/inactivo/:id',[
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe ena base de datos").custom(helperTercero.validarId)  
], httpTerceros.putModificarInactivo)

export default router

