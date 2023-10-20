import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import moviesController from "@/controllers/movies-controller";
import {Movie} from "@/types/movies/types";

interface Props {
    sectionName: string;
}

export function MovieListNumber({sectionName}: Props) {
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
        <div className="z-20 flex flex-col text-[#E5E5E5] text-3xl max-w-full overflow-hidden h-full">
            <h3 className="py-4 font-netflix-medium">{sectionName}</h3>
            <div className="flex gap-2">
                {movies?.map(
                    (movie, index) =>
                        index <= 9 && (
                            <div key={movie.id} className="flex items-center min-w-[293px] h-[210px] relative">
                                <h2
                                    className="text-[210px] text-black w-full block"
                                    style={{WebkitTextStroke: "5px #595959"}}
                                >
                                    {index + 1}
                                </h2>
                                <img
                                    alt=""
                                    className="w-auto max-w-[140px] rounded absolute right-0 top-0"
                                    src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                                />
                            </div>
                        ),
                )}
            </div>
        </div>
    );
}
