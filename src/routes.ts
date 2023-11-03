import express, { Request, Response } from "express";
import GetItemController from "./FinalFantasyStore/Infrastructure/Controller/GetItemController";
import AddItemPostController from "./FinalFantasyStore/Infrastructure/Controller/AddItemPostController";
const asyncHandler = require("express-async-handler");
var router = express.Router();

router.get("/", (req: Request, res: Response) => res.status(200).send("I am alive!"));

router.get("/item/:id", asyncHandler(GetItemController));
router.post("/item", asyncHandler(AddItemPostController));

export default router;
