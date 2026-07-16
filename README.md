# E-Commerce Backend API

## Project Goal

This project is a RESTful API for an E-Commerce system built using Node.js, Express.js, and MongoDB. It allows shoppers to browse products, create shopping carts, and allows administrators to manage products.

---

## User Stories

- As a shopper, I can view all available products.
- As a shopper, I can create a shopping cart and add products to it.
- As an admin, I can create new products.
- As an admin, I can update existing products.
- As an admin, I can delete products.

---

## Features

- Product CRUD Operations
- Shopping Cart
- MongoDB Database
- Error Handling
- Seed Script

---

## Installation

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## Run Server

```bash
npm run dev
```

---

## Seed Database

```bash
npm run seed
```

---

## API Endpoints

### Products

GET /api/products

GET /api/products/:id

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id

### Cart

POST /api/carts

GET /api/carts/:id

POST /api/carts/:id/items
## Backend API Implementation Completed