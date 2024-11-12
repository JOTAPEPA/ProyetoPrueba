import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import httpTerceros from './routes/terceros.js'
import httpMovimiento from './routes/movimiento.js'
import httpArticulos from './routes/articulos.js'
import httpCategorias from './routes/categorias.js'



const app = express();
app.use(express.json());
<<<<<<< HEAD
app.use("/terceros", httpTerceros);
app.use("/movimiento", httpMovimiento);
app.use("/articulos", httpArticulos);
app.use("categorias", httpCategorias);
=======
app.use("/api/terceros", httpTerceros);
app.use("/api/movimiento", httpMovimiento);
app.use("/api/articulos", httpArticulos);
>>>>>>> f4636ddb7aecd5feee6867f3eabd6fa3f4aa862b

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=> console.log('conected!'))
    .catch((error)=> console.log(error)) 
})