import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import moviesController from "@/controllers/movies-controller";
import {Movie} from "@/types/movies/types";

interface Props {
    sectionName: string;
}

export function MovieList({sectionName}: Props) {
    const [movies, setMovies] = useState<Movie[] | undefined>(undefined);
    const param = useParams();
    const cambiarNombre = async () => {
        const res = await moviesController.getMovies();

        if (res.ok) {
            setMovies(res.data.results);
        }
    };

    useEffect(() => {
        cambiarNombre();
    }, [param.id]);

    return (
        <div className="z-20 flex flex-col text-[#E5E5E5] text-3xl max-w-full overflow-x-hidden h-full">
            <h3 className="py-4 font-netflix-medium">{sectionName}</h3>
            <div className="flex gap-2">
                {movies?.map((movie) => (
                    <img
                        key={movie.id}
                        alt=""
                        className="w-[293px] rounded"
                        src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                    />
                ))}
            </div>
        </div>
    );
}
