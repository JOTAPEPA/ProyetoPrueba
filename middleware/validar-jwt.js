import jwt from 'jsonwebtoken'
import usuarios from '../models/usuarios.js';

const generarJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                reject(err)
            } else {
                resolve(token)
            }
        });
    });
};

const validarJWT = async (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({ error: 'No se ha proporcionado el token' })
    }
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        const usuario = await usuarios.findById(id);
        if (!usuario) {
            return res.status(401).json({ error: 'token no valido: usuario no encontrado'});
        }
        if (usuario.estado === 0) {
            return res.status(401).json({ error: 'cuenta inactiva' });
        }
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'token no valido' });
    }
};

export { validarJWT, generarJWT };

