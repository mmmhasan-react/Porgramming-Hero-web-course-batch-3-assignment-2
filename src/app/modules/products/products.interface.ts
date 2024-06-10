import { Schema, model, connect } from "mongoose";

export type ProductName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Product = {
  productName: ProductName;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: {
    type: string;
    value: string;
  }[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
