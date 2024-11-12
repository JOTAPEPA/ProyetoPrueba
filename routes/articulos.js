
import e, { Router } from 'express'
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

<<<<<<< HEAD
=======
export default router
>>>>>>> c0a3871ab1ed2a51d18331faa4ecaf8caa4a63fb
