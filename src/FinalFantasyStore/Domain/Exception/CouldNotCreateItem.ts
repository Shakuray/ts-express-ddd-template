export default class CouldNotCreateItem extends Error {
    constructor(reason: string) {
        super(reason);
    }
}

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
export class NegativeItemPrice extends CouldNotCreateItem {
    constructor() {
        super("Item price could not be a negative number");
    }
}
