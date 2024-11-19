import Usuario from '../models/usuarios.js';
import { generarJWT } from '../middleware/validar-jwt.js';
import bcrypt from 'bcryptjs';


const httpUsuarios = {

  postRegistrarUsuario: async (req, res) => {
    try {
      const { nombre, email, password, } = req.body;
      const existinguser = await Usuario.findOne({ email });
      if (existinguser) {
        return res.status(400).json({ error: 'El usuario ya está registrado' });
      }
      
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
      await nuevoUsuario.save();
      
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.log(error);
        
      res.status(400).json({ error: 'Error al crear nuevo usuario' });
    }
  },

  
  postLoginUruario: async (req, res) => {
    try {
      const { email, password } = req.body;
      const usuario = await Usuario.findOne({ email });
      if (!usuario) {
        return res.status(400).json({ error: 'Usuario no encontrado' });
      }

      
      const passwordMatch = await bcrypt.compare(password, usuario.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
      }

      const token = await generarJWT(usuario._id);
      res.status(200).json({ token, message: 'Inicio de sesión exitoso' });
    } catch (error) {
      res.status(400).json({ error: 'Error al iniciar sesión' });
<<<<<<< HEAD
      console.log(error);
=======
>>>>>>> df7a5fb9027f6b79c79f27dbc057ee57ad691c15
      
    }
  },
  getlistarUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.find(); 
      res.status(200).json(usuarios); 
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Error al obtener los usuarios' });
    }
  }
};

export default httpUsuarios;
