import { Router } from 'express'
import httpCategorias from '../controllers/categorias.js'
import { check } from 'express-validator'
import middleWareValidar from '../middleware/validar_datos.js'
import { validarJWT } from '../middleware/validar-jwt.js'
import helperCategorias from '../helpers/categorias.js'

const router = Router()

router.post('/',[
    check ("nombre", "El nombre es obligatorio").notEmpty(),
    check ("descripcion", "La descripcion es obligatoria").notEmpty(),
    check ("estado", "El estado es obligatorio").notEmpty(),
    middleWareValidar
], httpCategorias.postInsertar)

router.put('/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperCategorias.validarId),
    middleWareValidar
], httpCategorias.putModificar)

router.get('/',[
    validarJWT,
    middleWareValidar
], httpCategorias.getListarTodos)

router.get('/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperCategorias.validarId),
    middleWareValidar
], httpCategorias.getListarXId)

router.get('/activos',[ 
    validarJWT,
    middleWareValidar
], httpCategorias.getListarActivos)

router.get('/inactivos',[
    validarJWT,
    middleWareValidar
], httpCategorias.getListarInactivos)

router.put('/activar/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperCategorias.validarId),
    middleWareValidar
], httpCategorias.putModificarActivo)

router.put('/desactivar/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperCategorias.validarId),
    middleWareValidar
], httpCategorias.putModificarInactivo)


export default router