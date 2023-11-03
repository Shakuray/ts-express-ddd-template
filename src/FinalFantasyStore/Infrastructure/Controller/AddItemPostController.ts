import { Request, Response } from "express";
import ItemMemoryRepository from "../Infrastructure/ItemMemoryRepository";
import CreateItemCommandHandler from "../../Application/CreateItemCommandHandler";
import CouldNotCreateItem from "../../Domain/Exception/CouldNotCreateItem";

export default async function AddItemPostController(req: Request, res: Response) {
    const queryHandler = CreateItemCommandHandler(new ItemMemoryRepository());
    try {
        await queryHandler({
            id: req.body.id,
            name: req.body.name,
            price: parseFloat(req.body.price),
        });
        return res.status(200).send();
    } catch (ex) {
        if (ex instanceof CouldNotCreateItem) {
            return res.status(500).send({
                error: "COULD_NOT_CREATE_ITEM",
                message: ex.message,
            });
        }
        console.error(ex);
        return res.sendStatus(500);
    }
}
