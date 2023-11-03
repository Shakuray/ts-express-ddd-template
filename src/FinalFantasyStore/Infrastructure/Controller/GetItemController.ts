import { Request, Response } from "express";
import GetItemQueryHandler from "../../Application/GetItemQueryHandler";
import ItemMemoryRepository from "../Infrastructure/ItemMemoryRepository";
import ItemNotFound from "../../Domain/Exception/ItemNotFound";

export async function GetItem(req: Request, res: Response) {
    const queryHandler = GetItemQueryHandler(new ItemMemoryRepository());
    try {
        const response = await queryHandler({
            id: req.params.id,
        });
        return res.status(200).send(response);
    } catch (ex) {
        if (ex instanceof ItemNotFound) {
            return res.send(404).send({
                error: "ITEM_NOT_FOUND",
                message: ex.message,
            });
        }
        console.error(ex);
        return res.status(500);
    }
}
