import ItemRepository from "../Domain/Contract/ItemRepository";
import Item from "../Domain/Item";
import CreateItemCommand from "./Command/CreateItemCommand";

const CreateItemCommandHandler =
    (itemRepo: ItemRepository) =>
    async (command: CreateItemCommand): Promise<void> => {
        const item = new Item(command.id, command.name, command.price);
        await itemRepo.add(item);
    };

export default CreateItemCommandHandler;
