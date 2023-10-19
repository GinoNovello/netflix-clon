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
                        className="w-full h-full object-cover z-0"
                        src={`http://image.tmdb.org/t/p/original${movies[6]?.backdrop_path}`}
                    />
                )}
            </div>
            {movies && (
                <div className="relative w-full h-full text-white">
                    <div className="max-w-[685px] pl-[60px]">
                        <h2 className="text-9xl text-yellow-500">{movies[6].title}</h2>
                        <p className="py-7 text-2xl">{movies[6].overview}</p>

                        <div className="font-medium text-2xl flex gap-4">
                            <button className="bg-white text-black py-3 px-10 gap-3 flex justify-center items-center rounded-md">
                                <i className="fa-duotone fa-play text-3xl" />
                                Reproducir
                            </button>

                            <button className="bg-[#515254] text-white py-3 gap-3 px-10 flex justify-center items-center rounded-md">
                                <i className="fa-light fa-circle-info text-3xl" />
                                Más información
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
