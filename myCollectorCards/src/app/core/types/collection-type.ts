import { CardType } from "./card-type";

export type CollectionType = {
    id: number;
    name: string;
    nbCards: number;
    cards: CardType[];
}