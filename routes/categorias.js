import { Router } from 'express'
import httpCategorias from '../controllers/categorias.js'

const router = Router()

router.post('/', httpCategorias.postInsertar)
router.put('/:id', httpCategorias.putModificar)
router.get('/', httpCategorias.getListarTodos)
router.get('/:id', httpCategorias.getListarXId)
router.get('/activos', httpCategorias.getListarActivos)
router.get('/inactivos', httpCategorias.getListarInactivos)
router.put('/activar/:id', httpCategorias.putModificarActivo)
router.put('/desactivar/:id', httpCategorias.putModificarInactivo)


export default router