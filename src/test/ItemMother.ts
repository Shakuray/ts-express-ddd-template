import Item from "../FinalFantasyStore/Domain/Item";

export default class ItemMother {
    public static any(): Item {
        return new Item("AAA1", "Potion", 100);
    }
}
