import { Request, Response } from "express";
import { productServices } from "./products.service";

const createProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body;

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

export const productsContollers = {
  createProducts,
};
