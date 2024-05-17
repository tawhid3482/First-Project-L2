import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

const getAcontrolar = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAcontrolar);

export default app;
