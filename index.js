import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=> console.log('conected!'))
    .catch((error)=> console.log(error)) 
})