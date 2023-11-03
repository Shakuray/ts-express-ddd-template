import ItemID from "./ValueObject/ItemID";
import ItemName from "./ValueObject/ItemName";
import ItemPrice from "./ValueObject/ItemPrice";

export default class Item {
    public readonly ID: ItemID;
    public readonly name: ItemName;
    public readonly price: ItemPrice;

    constructor(ID: string, name: string, price: number) {
        this.ID = new ItemID(ID);
        this.name = new ItemName(name);
        this.price = new ItemPrice(price);
    }
}
