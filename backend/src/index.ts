import { NextFunction, Request, Response } from "express";
import { connectDb } from "./config/connectionDb";
import UserModel from "./models/UserModel";
import {userRegister}  from "./routes/routeUser"

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const user = UserModel.findModel("6542547d64cdb765de2314bb"); 
  user.then((user) => {
    res.send(user);
  });
});

app.post('/register', userRegister);

app.listen(3000, (): void => {
  console.log("server running on port " + port);
  connectDb();
});
