//iMPORTACION DE DEPENDENCIAS Y ARCHIVOS

import express from 'express';
import dataBase from './database/conexion.js';
import productoRouter from './routes/RouteProducto.js';
import cors from 'cors';

const app = express();
const port = 3100;

//VALIDACION DE CORRECCION

try{
    await dataBase.authenticate()
    console.log('conexion exitosa')
}catch(error){
    console.log(`Conexion no exitosa. ${error}`)
}

app.use(cors());
app.use(express.json());
app.use('/productos',productoRouter);

//EJECUCION DEL SERVIDOR

app.listen(port, () => {
    console.log( `Servidor corriendo en el puerto ${port}`)
    console.log("Servidor funciona en http://localhost:3100")
})