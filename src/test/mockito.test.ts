import CreateItemCommandHandler from "../FinalFantasyStore/Application/CreateItemCommandHandler";
import GetItemQueryHandler from "../FinalFantasyStore/Application/GetItemQueryHandler";
import Item from "../FinalFantasyStore/Domain/Item";
import ItemMother from "./ItemMother";
import { anything, capture, instance, mock, when } from "ts-mockito";
import ItemRepository from "../FinalFantasyStore/Domain/Contract/ItemRepository";
import ItemNotFound from "../FinalFantasyStore/Domain/Exception/ItemNotFound";
import { InvalidPrice } from "../FinalFantasyStore/Domain/Exception/CouldNotCreateItem";
import ItemID from "../FinalFantasyStore/Domain/ValueObject/ItemID";

describe("Items test (ts-mockito)", () => {
    const mockedRepo = mock<ItemRepository>();

    it("Should return a valid item from repository 🧪", async () => {
        const repo = instance(mockedRepo);
        const ITEM = ItemMother.any();
        when(mockedRepo.get(anything())).thenReturn(Promise.resolve(ITEM));
        const useCase = GetItemQueryHandler(repo);

        const result = await useCase({ id: "A" });

        expect(result).toEqual({ name: ITEM.name.toString(), price: ITEM.price.val() });
    });

    it("Should save a new potion repo", async () => {
        const repo = instance(mockedRepo);
        const useCase = CreateItemCommandHandler(repo);

        await useCase({
            id: "123",
            name: "Potion",
            price: 100,
        });

        const [item] = capture(mockedRepo.add).last();
        expect(item).toEqual(new Item("123", "Potion", 100));
    });

    it("Should throw an error when creating an item with price less than 10", async () => {
        const repo = instance(mockedRepo);
        const useCase = CreateItemCommandHandler(repo);

        await expect(
            useCase({
                id: "123",
                name: "Potion",
                price: 9,
            })
        ).rejects.toThrow(new InvalidPrice());
    });

    it("Should throw an error when item is not found", async () => {
        const repo = instance(mockedRepo);
        when(mockedRepo.get(anything())).thenThrow(new ItemNotFound(new ItemID("A")));

        const useCase = GetItemQueryHandler(repo);
        await expect(useCase({ id: "A" })).rejects.toThrow(new ItemNotFound(new ItemID("A")));
    });
});
