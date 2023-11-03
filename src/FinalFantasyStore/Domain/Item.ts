import {
    NullItemIdentifier,
    NullItemName,
    NegativeItemPrice,
} from "./Exception/CouldNotCreateItem";
import ItemID from "./ValueObject/ItemID";
import ItemName from "./ValueObject/ItemName";
import ItemPrice from "./ValueObject/ItemPrice";

export default class Item {
    public readonly ID: ItemID;
    public readonly name: ItemName;
    public readonly price: ItemPrice;

    constructor(ID: string, name: string, price: number) {
        if (!ID) throw new NullItemIdentifier();
        this.ID = new ItemID(ID);

        if (!name) throw new NullItemName();
        this.name = new ItemName(name);

        if (!price || price < 0) throw new NegativeItemPrice();
        this.price = new ItemPrice(price);
    }
}
