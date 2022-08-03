import Calculator from "../Application/Calculator";

describe("Example test", () => {
    it("It sum well 👍", async () => {
        const A = 3;
        const B = 2;

        const useCase = new Calculator();
        const result = useCase.sum(A, B);

        expect(result).toBe(5);
    });
});
