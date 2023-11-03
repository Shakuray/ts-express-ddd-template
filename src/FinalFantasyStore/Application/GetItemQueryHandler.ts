import ItemID from "../Domain/ValueObject/ItemID";
import ItemRepository from "../Domain/Contract/ItemRepository";
import GetItemQuery from "./Query/GetItemQuery";
import ItemResponse, { MapItemToResponse } from "./Mapper/ItemResponse";

const GetItemQueryHandler =
    (repo: ItemRepository) =>
    async (query: GetItemQuery): Promise<ItemResponse> => {
        const item = await repo.get(new ItemID(query.id));
        return MapItemToResponse(item);
    };

export default GetItemQueryHandler;
