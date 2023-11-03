import Item from "../Item";
import ItemID from "../ValueObject/ItemID";

export default interface ItemRepository {
    get(id: ItemID): Promise<Item>;
    add(item: Item): Promise<void>;
}
