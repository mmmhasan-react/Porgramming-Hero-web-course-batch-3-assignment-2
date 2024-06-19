import express from "express";

import { productsContollers } from "./products.controller";

const router = express.Router();
router.post("/products", productsContollers.createProducts);
router.get("/products", productsContollers.getAllProducts);
export const productRoutes = router;
