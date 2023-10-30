import {useEffect, useState} from "react";
import {useSpringCarousel} from "react-spring-carousel";

import {CardWrapper} from "../card-wrapper";

import {Movie} from "@/types/movies/types";

interface Props {
    sectionName: string;
    movies: Movie[];
}

export function MovieList({sectionName, movies}: Props) {
    const [startChange, setStartChange] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const {carouselFragment, slideToPrevItem, slideToNextItem, useListenToCustomEvent} = useSpringCarousel({
        slideType: "fluid",
        items: movies?.map((movie, index) => ({
            id: movie.backdrop_path,
            renderItem: (
                <div className={`${movies.length === index + 1 && !startChange ? "opacity-0" : ""} w-[290px]`}>
                    <CardWrapper
                        genres={movie.genre_ids}
                        image={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                        setIsHover={setIsHover}
                    >
                        <img
                            alt="image"
                            className="w-full rounded"
                            src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                        />
                    </CardWrapper>
                </div>
            ),
        })),
        gutter: 8,
        withLoop: true,
        startEndGutter: startChange ? 60 : 0,
        slideAmount: 1788,
        disableGestures: true,
    });

    useListenToCustomEvent((event: any) => {
        if (event.eventName === "onSlideStartChange" && !isHover) setStartChange(true);
    });

    useEffect(() => {
        if (!canClick) {
            const resetButton = setTimeout(() => {
                setCanClick(true);
            }, 1000);

            !canClick && resetButton;
            () => clearTimeout(resetButton);
        }
    }, [canClick]);

    return (
        <div className="inline-flex flex-col text-[#E5E5E5] text-3xl max-w-full h-full z-10 group">
            <div className="flex items-baseline">
                <h3 className="pb-4 font-netflix-medium text-[1.4vw]">{sectionName}</h3>
                <span className="hidden px-3 text-[#54B9C5] text-[0.9vw] group-hover:flex transition-all cursor-pointer">
                    Explorar todos
                </span>
                <i className="fa-regular fa-chevron-right text-[#54B9C5] text-[0.9vw] group-hover:flex hidden" />
            </div>
            <div className="relative flex w-screen -ml-[60px]">
                <button
                    className="left-0 h-full text-6xl text-transparent absolute transition-all hover:text-white hover:bg-black/70 w-[52px] z-10"
                    onClick={() => {
                        canClick && slideToPrevItem();
                        setCanClick(false);
                    }}
                >
                    <i className="fa-regular fa-chevron-left" />
                </button>
                <div className={`${isHover ? "" : "overflow-hidden"} ${startChange ? "" : "ml-[60px]"}`}>
                    {carouselFragment}
                </div>
                <button
                    className="absolute right-[17px] h-full text-6xl text-transparent transition-all hover:text-white hover:bg-black/70 w-[55px] z-10"
                    disabled={!canClick}
                    onClick={() => {
                        slideToNextItem();
                        setCanClick(false);
                    }}
                >
                    <i className="fa-regular fa-chevron-right" />
                </button>
            </div>
        </div>
    );
}
