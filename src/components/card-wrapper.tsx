import {Dispatch, Fragment, SetStateAction, useRef, useState} from "react";

import TooltipWrapper from "./ui/tooltip";

import {movieGenres} from "@/types/genres/types";
import {useListStore} from "@/stores/list-store";
import {Movie} from "@/types/movies/types";

interface Props {
    children: React.ReactNode;
    setIsHover?: Dispatch<SetStateAction<boolean>>;
    genres: (keyof typeof movieGenres)[];
    movie: Movie;
}

export function CardWrapper({movie, setIsHover, children, genres}: Props) {
    const [showCard, setShowCard] = useState(false);

    const addToList = useListStore((state) => state.addToList);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const mouseLeave = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setIsHover && setIsHover(false);
            setShowCard(false);
        }, 150);
    };

    const mouseEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setShowCard(true);
            setIsHover && setIsHover(true);
        }, 300);
    };

    return (
        <div onMouseOut={mouseLeave} onMouseOver={mouseEnter}>
            {showCard ? (
                <div className="bg-[#181818] hover:cursor-pointer text-custom-white rounded shadow shadow-black absolute hover:-translate-y-12 top-0 transition-all duration-150 ease-in hover:scale-150 hover:duration-300 hover:ease-out z-30">
                    <img alt="" className="rounded-t" src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} />
                    <div className="flex flex-col p-4 text-[10px] gap-2">
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <i className="flex items-center justify-center text-xl text-black bg-white rounded-full fa-duotone fa-play w-7 h-7 hover:bg-custom-white" />
                                <TooltipWrapper text={"Agregar a Mi lista"}>
                                    <i
                                        className="text-[26px] fa-sharp fa-thin fa-plus bg-[#222222] active:bg-[#B8BCBF] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white"
                                        onClick={() => addToList(movie)}
                                    />
                                </TooltipWrapper>
                                <i className="text-base fa-light fa-thumbs-up bg-[#222222] active:bg-[#B8BCBF] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white" />
                            </div>
                            <TooltipWrapper text={"Más información"}>
                                <i className="text-lg fa-light fa-angle-down bg-[#222222] active:bg-[#B8BCBF] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white" />
                            </TooltipWrapper>
                        </div>
                        <div>
                            <i className="fa-light fa-high-definition fa-lg fa-thin rounded-xl" />
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            {genres.map((genre, index) => (
                                <Fragment key={index}>
                                    {movieGenres[genre]}
                                    {genres.length === index + 1 ? (
                                        ""
                                    ) : (
                                        <i className="fa-duotone fa-circle-small fa-2xs text-[#646464]" />
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
    );
}
