import { Collection } from "./collection";

export type Item = {
    id: string;
    name: string;
    artist: string;
    album: string;
    photoUrl: string | null;
    collection: Collection;
    collectionId: string;
};

export type ItemCreate = Omit<Item, 'id' | 'collection'>;