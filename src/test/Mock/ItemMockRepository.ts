import ItemRepository from "../../FinalFantasyStore/Domain/Contract/ItemRepository";
import Item from "../../FinalFantasyStore/Domain/Item";
import ItemID from "../../FinalFantasyStore/Domain/ValueObject/ItemID";

export default class ItemMockRepository implements ItemRepository {
    private itemToReturn: Item | undefined;

    private addSpy = jest.fn();

    async get(id: ItemID): Promise<Item> {
        return this.itemToReturn!;
    }

    async add(item: Item): Promise<void> {
        this.addSpy(item);
    }

    public itHasBeenCalledWith(item: Item) {
        expect(this.addSpy).toBeCalledWith(item);
    }

    public whenGettingItemReturn(item: Item) {
        this.itemToReturn = item;
    }
}
