import {useMoviesStore} from "@/stores/movies-store";

export function Search() {
    const moviesData = useMoviesStore((state) => state.searchMoviesData);

    return (
        <div className="grid grid-cols-6 gap-x-2 gap-y-[60px] h-fit">
            {moviesData?.map(
                (movie) =>
                    movie.backdrop_path && (
                        <img
                            key={movie.id}
                            alt=""
                            className="rounded w-[290px]"
                            src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                        />
                    ),
            )}
        </div>
    );
}
