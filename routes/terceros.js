import { Router } from 'express'
import httpTerceros from '../controllers/terceros.js'

const router = Router()

router.get('/', httpTerceros.getListarTerceros)
router.get('/:id', httpTerceros.getListarTercerosPorId)
router.get('/activos', httpTerceros.getListarActivos)
router.get('/inactivos', httpTerceros.getListarInactivos)
router.get('/:tipo', httpTerceros.getListarTipo)
router.post('/', httpTerceros.postTerceros)
router.put('/:id', httpTerceros.putModificarTerceros)

export default router

