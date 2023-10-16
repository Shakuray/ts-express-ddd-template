import { Request, Response } from "express";

export async function HelloWorld(req: Request, res: Response) {
    res.send("Hello World!");
}
