import {CardWrapper} from "@/components/card-wrapper";
import {useMoviesStore} from "@/stores/movies-store";

export function Search() {
    const moviesData = useMoviesStore((state) => state.searchMoviesData);

    return (
        <div className="grid gap-x-[6px] gap-y-20 grid-cols-6 pt-48">
            {moviesData?.map(
                (movie) =>
                    movie.backdrop_path && (
                        <div key={movie.id} className="relative">
                            <CardWrapper genres={movie.genre_ids} movie={movie}>
                                <img
                                    alt=""
                                    className="rounded w-[290px]"
                                    src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                                />
                            </CardWrapper>
                        </div>
                    ),
            )}
        </div>
    );
}
