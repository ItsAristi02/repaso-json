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
  };
  
  const listarProductos = () => {};
  const listarProducto = () => {};
  const editarProducto = () => {};
  const eliminarProducto = () => {};
  
  export {
    crearProducto,
    listarProductos,
    listarProducto,
    editarProducto,
    eliminarProducto,
  };