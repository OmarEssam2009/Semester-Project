import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./database/db.js";
import Product from "./models/productModel.js";

dotenv.config();

const products = [
  {
    name: "Laptop",
    description: "Gaming Laptop",
    price: 25000,
    category: "Electronics",
    stock: 10,
    image: "laptop.jpg",
  },
  {
    name: "Headphones",
    description: "Wireless Headphones",
    price: 2500,
    category: "Accessories",
    stock: 20,
    image: "headphones.jpg",
  },
  {
    name: "Coffee Mug",
    description: "Ceramic Mug",
    price: 150,
    category: "Home",
    stock: 50,
    image: "mug.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Database Seeded");

    await mongoose.connection.close();
  } catch (error) {
    console.log(error.message);
  }
};

seedDatabase();