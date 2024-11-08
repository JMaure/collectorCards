import { CollectionType } from "./collection-type";

export type UserType = {
    id: string;
    email: string;
    password: string;
    pseudo: string;
    collections: CollectionType[];
    lastOpening: Date;
    nbGems: number;

}