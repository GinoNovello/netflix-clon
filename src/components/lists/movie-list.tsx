import {useEffect, useState} from "react";
import {useSpringCarousel} from "react-spring-carousel";

import {Movie} from "@/types/movies/types";

interface Props {
    sectionName: string;
    movies: Movie[];
}

export function MovieList({sectionName, movies}: Props) {
    const [startChange, setStartChange] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const {carouselFragment, slideToPrevItem, slideToNextItem, useListenToCustomEvent} = useSpringCarousel({
        slideType: "fluid",
        items: movies?.map((movie, index) => ({
            id: index,
            renderItem: (
                <div className="w-[290px]">
                    <img
                        alt="image"
                        className="w-full rounded"
                        src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                    />
                </div>
            ),
        })),
        gutter: 8,
        itemsPerSlide: 6,
        withLoop: true,
        startEndGutter: startChange ? 60 : 0,
        slideAmount: 1788,
    });

    useListenToCustomEvent((event: any) => {
        if (event.eventName === "onSlideStartChange") setStartChange(true);
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
        <div className="inline-flex flex-col text-[#E5E5E5] text-3xl max-w-full h-full z-0 group">
            <div className="flex items-baseline">
                <h3 className="pb-4 font-netflix-medium text-[1.4vw]">{sectionName}</h3>
                <span className="hidden px-3 text-[#54B9C5] text-[0.9vw] group-hover:flex transition-all">
                    Explorar todos
                </span>
                <i className="fa-regular fa-chevron-right text-[#54B9C5] text-[0.9vw] group-hover:flex hidden" />
            </div>
            <div className="relative flex w-screen -ml-[60px] overflow-hidden">
                <button
                    className="left-0 h-full text-6xl text-transparent absolute transition-all hover:text-white hover:bg-black/70 w-[52px] z-10"
                    onClick={() => {
                        canClick && slideToPrevItem();
                        setCanClick(false);
                    }}
                >
                    <i className="fa-regular fa-chevron-left" />
                </button>
                <div className={`overflow-hidden ${startChange ? "" : "ml-[60px]"}`}>{carouselFragment}</div>
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