import { Product } from "./products.interface";
import { ProductModel } from "./products.model";

//create single product
const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

//get all products
const getAllProductsFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

//get single product
const getSingleProductFromDb = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

export const productServices = {
  createProductIntoDb,
  getAllProductsFromDb,
  getSingleProductFromDb,
};
