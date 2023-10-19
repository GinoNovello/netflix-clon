import {create} from "zustand";

import {SearchMovieData} from "@/types/movies/types";
export interface MoviesStore {
    combiMovie: boolean;
    searchMoviesData: SearchMovieData[] | undefined;
    setSearchMovieData: (movies: SearchMovieData[] | undefined) => void;
}
export const useMoviesStore = create<MoviesStore>()((set) => ({
    combiMovie: true,
    searchMoviesData: undefined,
    setSearchMovieData: (movies: SearchMovieData[] | undefined) => {
        set({searchMoviesData: movies});
    },
}));
