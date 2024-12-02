import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import httpTerceros from './routes/terceros.js'
import httpMovimiento from './routes/movimiento.js'
import httpArticulos from './routes/articulos.js'
import httpCategorias from './routes/categorias.js'
import httpUsuarios from './routes/usuarios.js'
import cors from 'cors';




const app = express();
app.use(cors({
    origin: 'https://inventariojpl.onrender.com', // Cambia esto por la URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    credentials: true // Permite enviar cookies si es necesario
  }));
app.use(express.json());
app.use("/api/terceros", httpTerceros);
app.use("/api/movimientos", httpMovimiento);
app.use("/api/articulos", httpArticulos);
app.use("/api/categorias", httpCategorias);
app.use("/api/", httpUsuarios);
app.use(express.static('public'));


app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=> console.log('conected!'))
    .catch((error)=> console.log(error)) 
})