import {create} from "zustand";

import {SearchMovieData} from "@/types/movies/types";

export interface MoviesStore {
    searchMoviesData: SearchMovieData[] | undefined;
    setSearchMovieData: (movies: SearchMovieData[] | undefined) => void;
}

export const useMoviesStore = create<MoviesStore>()((set) => ({
    searchMoviesData: undefined,
    setSearchMovieData: (movies: SearchMovieData[] | undefined) => {
        set({searchMoviesData: movies});
    },
}));
