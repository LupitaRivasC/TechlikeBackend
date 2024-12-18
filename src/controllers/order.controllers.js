import Order from '../models/order.models.js';
import Products from '../models/products.models.js';

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products');
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: ['Error al obtener los pedidos'] });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products');
    if (!order)
      return res.status(404).json({ error: ['Pedido no encontrado'] });
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: ['Error al obtener el pedido'] });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const data = { status };

    const order = await Order.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!order) {
      return res.status(404).json({ message: ['Pedido no encontrado'] });
    }
    res.json({ message: 'Estado del pedido actualizado correctamente', order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ['Error al actualizar el estado del pedido'] });
  }
};
