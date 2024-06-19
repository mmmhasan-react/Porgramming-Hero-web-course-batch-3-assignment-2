import express, { Request, Response } from "express";
const app = express();
import cors from "cors";
import { productRoutes } from "./app/modules/products/products.route";

//parser
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

app.get("/", (req: Request, res: Response) => {
  const a = 8;

  res.send(a);
});

export default app;
