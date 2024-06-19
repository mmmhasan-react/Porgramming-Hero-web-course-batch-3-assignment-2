import { Request, Response } from "express";
import { productServices } from "./products.service";

const createProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body.products;

    //send response
    const result = await productServices.createProductIntoDb(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//getAllProductsContoller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    //send response
    const result = await productServices.getAllProductsFromDb();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//getAllProductsContoller
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    //send response
    const result = await productServices.getSingleProductFromDb(productId);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productsContollers = {
  createProducts,
  getAllProducts,
  getSingleProduct,
};
