import {create} from "zustand";

import {Movie} from "@/types/movies/types";

export interface ListStore {
    list: Movie[] | undefined;
    addToList: () => void;
}

export const useListStore = create<ListStore>((set, get) => ({
    list: undefined,
    addToList: () => console.log(get().list),
}));
