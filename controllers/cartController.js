import Cart from "../models/cartModel.js";

export const createCart = async (req, res) => {
  try {
    const cart = await Cart.create({ items: [] });

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate("items.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addItemToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;

    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === product
    );

    if (item) {
      item.quantity += quantity;
    } else {
      cart.items.push({
        product,
        quantity,
      });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};