import {useEffect, useState} from "react";

import moviesController from "@/controllers/movies-controller";
import {Movie} from "@/types/movies/types";
import {useMoviesStore} from "@/stores/movies-store";

export function Home() {
    const [movies, setMovies] = useState<Movie[] | undefined>(undefined);
    const moviesData = useMoviesStore((state) => state.searchMoviesData);
    const seekMovies = async () => {
        const res = await moviesController.getMovies();

        if (res.ok) {
            setMovies(res.data.results);
        }
    };

    console.log(moviesData);
    useEffect(() => {
        seekMovies();
    }, []);

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full">
                {movies && (
                    <img
                        alt=""
                        className="z-0 object-cover w-full h-full"
                        src={`http://image.tmdb.org/t/p/original${movies[6]?.backdrop_path}`}
                    />
                )}
            </div>
            {movies && (
                <div className="relative w-full h-full text-white py-60">
                    <div className="max-w-[685px] pl-[60px]">
                        <h2 className="text-yellow-500 text-9xl font-netflix-bold">{movies[6].title}</h2>
                        <p className="text-2xl py-7">{movies[6].overview}</p>

                        <div className="flex gap-4 text-2xl font-netflix-medium">
                            <button className="flex items-center justify-center gap-3 px-10 py-3 text-black bg-white rounded-md">
                                <i className="text-3xl fa-duotone fa-play" />
                                Reproducir
                            </button>

                            <button className="bg-[#515254] text-white py-3 gap-3 px-10 flex justify-center items-center rounded-md">
                                <i className="text-3xl fa-regular fa-circle-info" />
                                Más información
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
