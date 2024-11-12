import { Router } from 'express'
import httpArticulos from '../controllers/articulos.js'

const router = Router()

router.post('/', httpArticulos.postInsertar)
router.put('/:id', httpArticulos.putModificar)
router.get('/', httpArticulos.getListarTodos)
router.get('/:id', httpArticulos.getListarXId)
router.get('/activos', httpArticulos.getListarActivos)
router.get('/inactivos', httpArticulos.getListarInactivos)
router.put('/activar/:id', httpArticulos.putModificarActivo)
router.put('/desactivar/:id', httpArticulos.putModificarInactivo)

export default router
