import { Router } from 'express'
import httpMovimiento from '../controllers/movimiento.js'

const router = Router()

router.get('/', httpMovimiento.getListarMovimientos)
router.get('/:id', httpMovimiento.getListarMovimientosPorId)
router.get('/aprobados', httpMovimiento.getListarAprobados)
router.get('/anulados', httpMovimiento.getListarAnulados)
router.get('/tipo/:tipo', httpMovimiento.getListarMovimientosTipo)
router.get('/fecha/:fechaInicio/:fechaFin', httpMovimiento.getListarMovimientosPorFecha)
router.get('/totalvendido/:fechaInicio/:fechaFin', httpMovimiento.getTotalvendido)
router.post('/', httpMovimiento.postMovimiento)
router.put('/:id', httpMovimiento.putModificarMovimiento)
router.put('/anulado/:id', httpMovimiento.putModificarAnulado)
router.put('/aprobado/:id', httpMovimiento.putModificarAprobado)
router.put('/devolucion/:id', httpMovimiento.putModificarDevolucion)

export default router