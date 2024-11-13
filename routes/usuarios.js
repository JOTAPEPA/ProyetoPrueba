import { Router } from 'express'
import httpUsuarios from '../controllers/usuarios.js'
import middlewareValidar from '../middleware/validar_datos.js'
import { check } from 'express-validator'
import helperUsuario from '../helpers/usuarios.js'

const router = Router()

router.post('/registro',[
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("email", "El email es obligatorio").notEmpty(),
    check("email", "El email debe ser unico").custom(helperUsuario.validarEmail),
    check("password", "La contraseña es obligatoria").notEmpty(),
    check("password", "La contraseña debe tener al menos 8 caracteres").isLength({ min: 8 }),
    check("password", "La contraseña debe contener al menos un número").isLength({ min: 1 }),
    check("password", "La contraseña debe contener al menos un caracter especial").isLength({ min: 1 }),
    check("password", "La contraseña debe contener al menos una letra mayúscula").isLength({ min: 1 }),
    check("password", "La contraseña debe contener al menos una letra minúscula").isLength({ min: 1 }),
    middlewareValidar
], httpUsuarios.registrarUsuario)

router.post('/login',[
    check("email", "El email es obligatorio").notEmpty(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    middlewareValidar
], httpUsuarios.loginUsuario)

export default router