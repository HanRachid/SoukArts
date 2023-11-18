const express = require('express');
import {Request, Response} from 'express';
const productRouter = express.Router();

productRouter.post('/add', (req: Request, res: Response) => {});

productRouter.get('/:id', (req: Request, res: Response) => {
  console.log(req.params.id);
});

export default productRouter;
