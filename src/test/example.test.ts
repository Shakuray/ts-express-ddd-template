import CreateItemCommandHandler from "../FinalFantasyStore/Application/CreateItemCommandHandler";
import GetItemQueryHandler from "../FinalFantasyStore/Application/GetItemQueryHandler";
import Item from "../FinalFantasyStore/Domain/Item";
import ItemMother from "./ItemMother";
import ItemMockRepository from "./Mock/ItemMockRepository";

describe("Items test", () => {
    it("Should return a valid item from repository 🧪", async () => {
        const repo = new ItemMockRepository();
        const ITEM = ItemMother.any();
        repo.whenGettingItemReturn(ITEM);
        const useCase = GetItemQueryHandler(repo);

        const result = await useCase({ id: "A" });

        expect(result).toEqual({ name: ITEM.name.toString(), price: ITEM.price.val() });
    });

    it("Should save a new potion repo", async () => {
        const repo = new ItemMockRepository();
        const useCase = CreateItemCommandHandler(repo);

        await useCase({
            id: "123",
            name: "Potion",
            price: 100,
        });

        repo.itHasBeenCalledWith(new Item("123", "Potion", 100));
    });
});
