import { Router } from 'express'
import middlewareValidar from '../middleware/validar_datos.js'
import httpArticulos from '../controllers/articulos.js'
import { check } from 'express-validator'   
import { validarJWT } from '../middleware/validar-jwt.js'   
import helperArticulos from '../helpers/articulos.js'

const router = Router()

router.post('/',[
    check ("nombre", "El nombre es obligatorio").notEmpty(),
    check ("precio", "El precio es obligatorio").notEmpty(),
    check ("stock", "El stock es obligatorio").notEmpty(),
    check ("categoria", "La categoria es obligatoria").notEmpty(),
    check ("estado", "El estado es obligatorio").notEmpty(),
], httpArticulos.postInsertar)

router.put('/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperArticulos.validarId),
    middlewareValidar
], httpArticulos.putModificar)

router.get('/',[
    validarJWT,
    middlewareValidar
], httpArticulos.getListarTodos)

router.get('/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperArticulos.validarId),
    middlewareValidar
], httpArticulos.getListarXId)

router.get('/activos',[
    validarJWT,
    middlewareValidar
], httpArticulos.getListarActivos)

router.get('/inactivos',[
    validarJWT,
    middlewareValidar
], httpArticulos.getListarInactivos)

router.put('/activar/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperArticulos.validarId),
    middlewareValidar
], httpArticulos.putModificarActivo)
router.put('/desactivar/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperArticulos.validarId),
], httpArticulos.putModificarInactivo)



export default router

