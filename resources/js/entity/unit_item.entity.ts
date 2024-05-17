import { Item } from "./item.entity";

export type UnitItem = {
    id: string;
    item_id: string;
    code: string;
    status: string;
    item: Item;
};
