import { Router } from 'express'
import httpUsuarios from '../controllers/usuarios.js'
import middlewareValidar from '../middleware/validar_datos.js'
import { check } from 'express-validator'
import helperUsuario from '../helpers/usuarios.js'
import { validarJWT } from '../middleware/validar-jwt.js'

const router = Router()

router.post('/registro', [
    check("nombre", "El nombre es obligatorio").notEmpty().trim(), 
    check("email", "El email es obligatorio").notEmpty().trim(), 
    check("email", "El email debe ser unico").custom(helperUsuario.validarEmail),
    check("password", "La contraseña es obligatoria").notEmpty().trim(), 
    check("password", "La contraseña debe tener al menos 8 caracteres").isLength({ min: 8 }),
    check("password", "La contraseña debe contener al menos un número").matches(/\d/), 
    check("password", "La contraseña debe contener al menos un caracter especial").matches(/[\W_]/), 
    check("password", "La contraseña debe contener al menos una letra mayúscula").matches(/[A-Z]/),
    check("password", "La contraseña debe contener al menos una letra minúscula").matches(/[a-z]/), 
    middlewareValidar
], httpUsuarios.postRegistrarUsuario)


router.post('/login',[
    check("email", "El email es obligatorio").notEmpty(),
    check("password", "La contraseña es obligatoria").notEmpty(),
    middlewareValidar
], httpUsuarios.postLoginUruario)

router.get('/usuarios',[
    validarJWT,
    middlewareValidar
], httpUsuarios.getlistarUsuarios)

router.put('/usuarios/:id',[
    validarJWT,
    check("id", "Id no valido").isMongoId(),
    check("id", "no existe en la base de datos").custom(helperUsuario.validarId),
    check("email", "El email debe ser unico").optional().custom( async (email, {req}) => await helperUsuario.validarEmailPut(email, req.params.id)),
    check("email", "El email es obligatorio").trim().optional().notEmpty(),
    check("nombre", "El nombre es obligatorio").optional().notEmpty().trim(),

    middlewareValidar
], httpUsuarios.putModificarUsuario)

export default router