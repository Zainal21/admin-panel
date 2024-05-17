import { Categories } from "./category.entity";

export type Item = {
    id: string;
    name: string;
    brand: string;
    category: Categories;
};
