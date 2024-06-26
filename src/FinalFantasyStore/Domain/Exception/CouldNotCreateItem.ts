export default class CouldNotCreateItem extends Error {}

export class NullItemIdentifier extends CouldNotCreateItem {
    constructor() {
        super("Item identifier is NULL");
    }
}
export class NullItemName extends CouldNotCreateItem {
    constructor() {
        super("Item name is null");
    }
}
export class InvalidPrice extends CouldNotCreateItem {
    constructor() {
        super("Item price can't be less than 10");
    }
}
