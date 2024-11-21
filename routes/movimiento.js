import { Router } from 'express'
import httpMovimiento from '../controllers/movimiento.js'
import middlewareValidar from '../middleware/validar_datos.js'
import { check } from 'express-validator'
import helperMovimiento from '../helpers/movimientos.js'
import { validarJWT } from '../middleware/validar-jwt.js'

const router = Router()

router.get('/ventas',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getListarMovimientosVentas)

router.get('/compras',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getListarMovimientosCompras)

router.get('/devoluciones-compras',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getListarDevolucionCompras)

router.get('/devoluciones-ventas',[
    validarJWT,
    middlewareValidar
],  httpMovimiento.getListarDevolucionVentas)

router.get('/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperMovimiento.validarId),
    middlewareValidar
], httpMovimiento.getListarMovimientosPorId)

router.get('/aprobados',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getListarAprobados)

router.get('/anulados',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getListarAnulados)

router.get('/tipo/:tipo',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getListarMovimientosTipo)

router.get('/fecha/:fechaInicio/:fechaFin',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getListarMovimientosPorFecha)

router.get('/totalvendido/:fechaInicio/:fechaFin',[
    validarJWT,
    middlewareValidar
], httpMovimiento.getTotalvendido)

router.post('/',[
    check("tipo", "El tipo es obligatorio").notEmpty(),
    check("numeroFactura", "El numero de factura es obligatorio").notEmpty(),
    check("numeroFactura", "El numero de factura debe ser único").custom(helperMovimiento.validarNumeroFactura),
    check("fecha", "La fecha es obligatoria").notEmpty(),
    check("articulos", "Los articulos son obligatorios").notEmpty(),
    check("valor", "El valor es obligatorio").notEmpty(),
    check("iva", "El iva es obligatorio").notEmpty(),
    check("total", "El total es obligatorio").notEmpty(),
    middlewareValidar
], httpMovimiento.postMovimiento)

router.put('/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe ena base de datos").custom(helperMovimiento.validarId),
    middlewareValidar
], httpMovimiento.putModificarMovimiento)

router.put('/anulado/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperMovimiento.validarId),
    middlewareValidar
], httpMovimiento.putModificarAnulado)

router.put('/aprobado/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperMovimiento.validarId),
    middlewareValidar
], httpMovimiento.putModificarAprobado)

router.put('/devolucion/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperMovimiento.validarId),
    middlewareValidar
], httpMovimiento.putModificarDevolucion)

export default router