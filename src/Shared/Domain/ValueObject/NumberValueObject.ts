export default class NumberValueObject {
    constructor(private readonly value: number) {}

    public val(): number {
        return this.value;
    }
}
