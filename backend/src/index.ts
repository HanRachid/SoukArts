import  { NextFunction, Request, Response} from "express";
import { A } from './types';
const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000
app.get('/',(req:Request,res:Response)=>{
	console.log("deux");
	
	res.send('test');
});
app.listen(port,()=>{
	console.log('server running on port '+port);
})

