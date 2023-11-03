export default class StringValueObject {
    constructor(private readonly value: string) {}

    toString(): string {
        return this.value;
    }

    equals(other: StringValueObject): boolean {
        return this.value == other.value;
    }
}
