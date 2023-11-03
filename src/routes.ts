import express, { Request, Response } from "express";
import { GetItem } from "./FinalFantasyStore/Infrastructure/Controller/GetItemController";
const asyncHandler = require("express-async-handler");
var router = express.Router();

router.get("/", (req: Request, res: Response) => res.status(200).send("I am alive!"));

router.get("/item/:id", asyncHandler(GetItem));

export default router;
