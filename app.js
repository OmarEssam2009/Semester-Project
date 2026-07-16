import express from "express";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use(errorHandler);

export default app;