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
  },
  putModificarUsuario: async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, email, password, estado } = req.body;
      let update = { nombre, email, password, estado };
      const usuarioModificado = await Usuario.findByIdAndUpdate(id, update, { new: true });
      res.json(usuarioModificado)
    } catch (error) {
      res.status(400).json({ error: 'Error al actualizar usuario' })
      console.log(error);
    }
  },
};



export default httpUsuarios;
