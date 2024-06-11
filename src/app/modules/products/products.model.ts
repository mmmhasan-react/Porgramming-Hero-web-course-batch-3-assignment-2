import { Schema, model, connect } from "mongoose";
import { Product, Product, ProductName } from "./products.interface";

const productNameSchema = new Schema<ProductName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const productSchema = new Schema<Product>({
  productName: productNameSchema,
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: { type: [String], required: true },
  variants: [
    {
      type: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

export const ProductModel = model<Product>("Product", productSchema);
