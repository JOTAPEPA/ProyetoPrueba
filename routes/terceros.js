import { Router } from 'express'
import httpTerceros from '../controllers/terceros.js'
import middlewareValidar from '../middleware/validar_datos.js'
import { check } from 'express-validator'
import helperTercero from '../helpers/terceros.js'
import { validarJWT } from '../middleware/validar-jwt.js'
const router = Router()

router.get('/proveedores',[
   validarJWT, middlewareValidar
], httpTerceros.getListarTercerosProveedores)

router.get('/clientes',[
    validarJWT, middlewareValidar
 ], httpTerceros.getListarTercerosClientes)

router.get('/:id',[
    validarJWT,
  check("id", "Id no valido").isMongoId(),
  check("id", "no existe ena base de datos").custom(helperTercero.validarId),
  middlewareValidar
], httpTerceros.getListarTercerosPorId)

router.get('/activos',[
    validarJWT,
    middlewareValidar
], httpTerceros.getListarActivos)

router.get('/inactivos',[
    validarJWT,
    middlewareValidar
], httpTerceros.getListarInactivos)

router.get('/:tipo',[
    validarJWT,
    middlewareValidar
], httpTerceros.getListarTipo)

router.post('/',[
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("identificacion", "El identificacion es obligatorio").notEmpty(),
    check("identificacion", "El identificacion debe ser unico").custom(helperTercero.validarIdentificacion),
    check("direccion", "La direccion es obligatoria").notEmpty(),
    check("telefono", "El telefono es obligatorio").notEmpty(), 
    check('telefono', 'El teléfono debe tener exactamente 10 dígitos').isLength({ min: 10, max: 10 }).withMessage('El teléfono debe tener exactamente 10 dígitos'),
    check('telefono', 'El teléfono solo debe contener números').isNumeric().withMessage('El teléfono solo debe contener números'),
    check("email", "El email es obligatorio").notEmpty(),
    check("email", "El email debe ser unico").custom(helperTercero.validarEmail),
    middlewareValidar
    ], httpTerceros.postTerceros)

router.put('/:id',[
    validarJWT,
    check("nombre", "El nombre es obligatorio").optional().notEmpty(),
    check("identificacion", "La identificación debe ser única").optional().custom(async (identificacion, {req}) => await helperTercero.validarIdentificacionPut(identificacion, req.params.id)),
    check("direccion", "La dirección es obligatoria").optional().notEmpty(),
    check("telefono", "El teléfono es obligatorio").optional().notEmpty(),
    check("email", "El email es obligatorio").optional().notEmpty(),
    check("email", "El email debe ser único").optional().custom( async (email, {req}) => await helperTercero.validarEmailPut(email, req.params.id)),
    check("tipo", "El tipo es obligatorio").optional().notEmpty(),
    middlewareValidar
], httpTerceros.putModificarTerceros)

router.put('/activo/:id',[
    validarJWT, 
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe ena base de datos").custom(helperTercero.validarId),
    middlewareValidar 
], httpTerceros.putModificarActivo)

router.put('/inactivo/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe ena base de datos").custom(helperTercero.validarId),
    middlewareValidar  
], httpTerceros.putModificarInactivo)

export default router

