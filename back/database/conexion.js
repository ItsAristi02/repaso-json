import {Sequelize} from "sequelize";
//Esto es una conexion

const dataBase = new Sequelize('fullstack', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default dataBase;