import { NextFunction, Request, Response } from "express";
const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

const middle = (req: Request, res: Response, next: NextFunction): void => {
	console.log("middleware");

	try {
		next();
	} catch {
		console.error('An error occurred when calling next:');
	}
};

app.use(middle);
app.get('/', (req: Request, res: Response) => {
	res.send('rachdzaid');
});

app.listen(3000, (): void => {
	console.log('server running on port ' + port);
});

export { middle };