import Item from "../../Domain/Item";

export default interface ItemResponse {
    name: string;
    price: number;
}

export function MapItemToResponse(item: Item): ItemResponse {
    return {
        name: item.name.toString(),
        price: item.price.val(),
    };
}
