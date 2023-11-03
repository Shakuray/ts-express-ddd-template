import ItemRepository from "../../Domain/Contract/ItemRepository";
import ItemNotFound from "../../Domain/Exception/ItemNotFound";
import Item from "../../Domain/Item";
import ItemID from "../../Domain/ValueObject/ItemID";

export default class ItemMemoryRepository implements ItemRepository {
    private items: Item[] = [
        new Item("AAA", "Potion", 100),
        new Item("BBB", "Hi-Potion", 500),
        new Item("CCC", "Phoenix Tail", 1000),
        new Item("DDD", "Elixir", 1500),
        new Item("EEE", "Antidote", 80),
    ];

    async get(id: ItemID): Promise<Item> {
        const foundItem = this.items.find((item) => item.ID.equals(id));
        if (!foundItem) throw new ItemNotFound(id);

        return foundItem;
    }

    async add(item: Item): Promise<void> {
        this.items.push(item);
    }
}
