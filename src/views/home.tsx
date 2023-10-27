import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";

import {MovieList} from "../components/movie-list";

import {MovieListNumber} from "@/components/movie-list-number";
import moviesController from "@/controllers/movies-controller";
import {Movie} from "@/types/movies/types";
import {homeTranslate} from "@/i18n/home-translates";
import {useLanguageStore} from "@/stores/language-store";
import {CardWrapper} from "@/components/card-wrapper";

export function Home() {
    const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = homeTranslate[language];
    const seekMovies = async () => {
        const res = await moviesController.getMovies();

        if (res.ok) {
            setMovies(res.data.results);
        }
    };

    useEffect(() => {
        seekMovies();
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{textTranslated.home_title}</title>
                <link href="http://localhost:5173/home" rel="canonical" />
            </Helmet>
            <div className="flex flex-col max-w-full px-[60px]">
                <div className="absolute top-0 left-0 w-full h-full">
                    {movies && (
                        <img
                            alt=""
                            className="object-cover w-full h-full"
                            src={`http://image.tmdb.org/t/p/original${movies[6]?.backdrop_path}`}
                        />
                    )}
                </div>
                <div
                    className="absolute left-0 top-auto right-0 -bottom-[1px] bg-transparent bg-repeat-x h-[14.7vw] w-full"
                    style={{
                        backgroundPosition: "0 top",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                            "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 100%,#141414)",
                    }}
                />
                {movies && (
                    <div className="relative w-full h-full min-h-[calc(100vh-220px)] text-white flex items-center">
                        <div className="max-w-[685px]">
                            <h2 className="text-yellow-500 text-7xl font-netflix-bold">{movies[6].title}</h2>
                            <p className="text-2xl py-7">{movies[6].overview}</p>

                            <div className="flex gap-4 text-2xl font-netflix-medium">
                                <button className="flex items-center justify-center gap-3 px-10 py-3 text-black bg-white rounded-md hover:bg-[#BFC0C0]">
                                    <i className="text-3xl fa-duotone fa-play" />
                                    {textTranslated.header_texts.play_button}
                                </button>

                                <button className="flex items-center justify-center gap-3 px-10 py-3 text-white bg-[#6D6D6E] rounded-md bg-opacity-70 hover:bg-opacity-40">
                                    <i className="text-3xl fa-regular fa-circle-info" />
                                    {textTranslated.header_texts.more_info}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex flex-col gap-y-14">
                    {movies && <MovieList movies={movies} sectionName={textTranslated.sections_name.latest} />}
                    {movies && (
                        <MovieListNumber
                            movies={movies}
                            sectionName={textTranslated.sections_name.most_viewed_movies}
                        />
                    )}
                    {movies && (
                        <MovieList movies={movies} sectionName={textTranslated.sections_name.see_again_movies} />
                    )}
                </div>
            </div>
        </>
    );
}
