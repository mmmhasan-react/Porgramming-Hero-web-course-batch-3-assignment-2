import express, { Request, Response } from "express";
const app = express();
import cors from "cors";

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const a = 8;

  res.send(a);
});

export default app;
