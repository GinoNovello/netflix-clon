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
        <div className="z-20 flex flex-col text-[#E5E5E5] text-3xl max-w-full h-full">
            <h3 className="py-4 font-netflix-medium">{sectionName}</h3>
            <div className="flex gap-2 h-[210px] w-full">
                {movies?.map(
                    (movie, index) =>
                        index <= 9 && (
                            <div key={movie.id} className="flex items-center min-w-[293px] h-[210px] relative">
                                <h2
                                    className={`text-[285px] flex items-center h-[210px] text-black font-netflix-bold pb-3 leading-none 
                                    ${index === 0 ? "pl-8" : index <= 8 ? "pl-4" : ""} ${
                                        index === 9 ? "text-[200px]" : ""
                                    }`}
                                    style={{WebkitTextStroke: "5px #595959"}}
                                >
                                    {index !== 9 ? (
                                        index + 1
                                    ) : (
                                        <>
                                            1 <span className="-ml-8">0</span>
                                        </>
                                    )}
                                </h2>
                                <img
                                    alt=""
                                    className="max-h-[210px] rounded absolute right-0 top-0"
                                    src={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                                />
                            </div>
                        ),
                )}
            </div>
        </div>
    );
}
