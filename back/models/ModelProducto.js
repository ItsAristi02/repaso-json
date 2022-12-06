import dataBase from "../database/conexion.js";
import {DataTypes} from 'sequelize';

const Producto = dataBase.define('productos',{
    nombre:{
       type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

export default Producto;