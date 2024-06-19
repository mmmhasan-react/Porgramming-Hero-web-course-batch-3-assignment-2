import { Product } from "./products.interface";
import { ProductModel } from "./products.model";

//create single product
const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

//get all products
const getAllProductsFromDb = async () => {
  const result = ProductModel.find();
  return result;
};
export const productServices = {
  createProductIntoDb,
  getAllProductsFromDb,
};
