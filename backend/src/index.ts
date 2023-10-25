import { NextFunction, Request, Response } from "express";
const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req: Request, res: Response) => {
	res.send('rachdzaid');
});

app.listen(3000, () => {
	console.log('server running on port ' + port);
});
