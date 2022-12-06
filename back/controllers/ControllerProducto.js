import { where } from "sequelize";
import Producto from "../models/ModelProducto.js";

const crearProducto = async (req, res) => {
    try {
      await Producto.create(req.body);
      res.json({
        message: "Usuario creado correctamente"
      })
    } catch (error) {
      res.json({
        message: `No se puede registrar ${error}`
      })
    }
  }

  const mostrarProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos)
    } catch (error) {
        res.json({
        message: `Base de datos vacia ${error}`
      })
    }
  }

  const mostrarProducto = async (req, res) => {
    try {
        const producto = await Producto.findOne({where: {id: req.params.id}});
        res.json(producto)
    } catch (error) {
        res.json({
        message: `Producto no encontrado ${error}`
      })
    }
  }

  const editarProducto = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos)
    } catch (error) {
        res.json({
        message: `Base de datos vacia ${error}`
      })
    }
  }

  const eliminarProducto = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        req.json(productos)
    } catch (error) {
        res.json({
        message: `Base de datos vacia ${error}`
      })
    }
  }


  
  export {
    crearProducto,
    mostrarProductos,
    mostrarProducto,
    editarProducto,
    eliminarProducto
  };