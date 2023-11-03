import ItemID from "../ValueObject/ItemID";

export default class ItemNotFound extends Error {
    constructor(id: ItemID) {
        super(`Item with ID ${id.toString()} not found`);
    }
}
