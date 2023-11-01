import {create} from "zustand";

import {Movie} from "@/types/movies/types";

export interface ListStore {
    list: Movie[];
    addToList: (movie: Movie) => void;
    removeFromList: (movieId: number) => void;
}

export const useListStore = create<ListStore>((set, get) => ({
    list: JSON.parse(localStorage.getItem("MyList")!) || [], //TODO: arreglar error de typeo
    addToList: (movie: Movie) => {
        get().list.find((movieId) => movieId.id === movie.id)
            ? get().removeFromList(movie.id)
            : set((state) => ({
                  list: [...state.list, movie],
              }));
    },
    removeFromList: (movieId: number) => {
        set((state) => ({
            list: state.list.filter((movie) => movie.id !== movieId),
        }));
    },
}));
