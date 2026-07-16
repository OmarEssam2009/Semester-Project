import express from "express";
import {
  createCart,
  getCartById,
  addItemToCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/", createCart);
router.get("/:id", getCartById);
router.post("/:id/items", addItemToCart);

export default router;