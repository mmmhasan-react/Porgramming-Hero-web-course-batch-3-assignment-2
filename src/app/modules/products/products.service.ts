import { Product } from "./products.interface";
import { ProductModel } from "./products.model";

const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

export const productServices = {
  createProductIntoDb,
};
