import {useEffect, useState} from "react";
import {useSpringCarousel} from "react-spring-carousel";

import {CardWrapper} from "../card-wrapper";

import {Movie} from "@/types/movies/types";

interface CardHover {
    hover: boolean;
    index: null | number;
    movie: Movie | undefined;
}

interface Props {
    sectionName: string;
    movies: Movie[];
}

export function MovieListNumber({sectionName, movies}: Props) {
    const [startChange, setStartChange] = useState(false);
    const [canClick, setCanClick] = useState(true);
    const [isHover, setIsHover] = useState<CardHover>({
        hover: false,
        index: null,
        movie: undefined,
    });
    const [isFirstItem, setIsFirtsItem] = useState(true);

    const {carouselFragment, slideToPrevItem, slideToNextItem, useListenToCustomEvent} = useSpringCarousel({
        slideType: "fluid",
        items: movies?.slice(0, 10).map((movie, index) => ({
            id: index,
            renderItem: (
                <div
                    className="flex items-center w-[290px] relative"
                    onMouseOut={() =>
                        setIsHover({
                            hover: false,
                            index: null,
                            movie: undefined,
                        })
                    }
                    onMouseOver={() =>
                        setIsHover({
                            hover: true,
                            index: index,
                            movie: movie,
                        })
                    }
                >
                    <CardWrapper
                        image={`http://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                        isHover={isHover.hover && isHover.index === index}
                    >
                        <h2
                            className={`flex items-center h-[210px] text-black font-netflix-bold pb-3 ${
                                index === 9 ? "text-[220px]" : "text-[285px]"
                            } ${index === 0 ? "pl-8" : index <= 8 ? "pl-4" : ""}`}
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
                    </CardWrapper>
                </div>
            ),
        })),
        gutter: 8,
        itemsPerSlide: 6,
        withLoop: true,
        startEndGutter: startChange ? 60 : 0,
        slideAmount: isFirstItem ? 1192 : 1788,
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
        <div className="flex flex-col text-[#E5E5E5] text-3xl max-w-full h-full">
            <h3 className="pb-4 font-netflix-medium">{sectionName}</h3>
            <div className="relative flex w-screen -ml-[60px] ">
                <button
                    className="left-0 h-full text-6xl text-transparent absolute transition-all hover:text-white hover:bg-black/70 w-[52px] z-10"
                    onClick={() => {
                        canClick && slideToPrevItem();
                        setCanClick(false);
                    }}
                >
                    <i className="fa-regular fa-chevron-left" />
                </button>
                <div className={`overflow-x-hidden ${startChange ? "" : "ml-[60px]"}`}>{carouselFragment}</div>
                <button
                    className="absolute right-[17px] h-full text-6xl text-transparent transition-all hover:text-white hover:bg-black/70 w-[55px] z-10"
                    disabled={!canClick}
                    onClick={() => {
                        slideToNextItem();
                        setCanClick(false);
                        setIsFirtsItem(!isFirstItem);
                    }}
                >
                    <i className="fa-regular fa-chevron-right" />
                </button>
            </div>
        </div>
    );
}
