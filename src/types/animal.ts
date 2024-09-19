import { TCategory } from "./category";

export type TAnimal = {
    _id: string;
    name: string;
    category: TCategory;
    img: string;
}