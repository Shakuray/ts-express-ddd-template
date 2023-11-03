import Item from "../Item";
import ItemID from "../ValueObject/ItemID";

export default interface ItemRepository {
    getItem(id: ItemID): Promise<Item>;
}
