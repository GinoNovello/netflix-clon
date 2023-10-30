import {Dispatch, Fragment, SetStateAction, useRef, useState} from "react";

import {movieGenres} from "@/types/genres/types";

interface Props {
    image: string;
    children: React.ReactNode;
    setIsHover: Dispatch<SetStateAction<boolean>>;
    genres: (keyof typeof movieGenres)[];
}

export function CardWrapper({image, setIsHover, children, genres}: Props) {
    const [showCard, setShowCard] = useState(false);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const mouseLeave = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setIsHover(false);
            setShowCard(false);
        }, 150);
    };

    const mouseEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setShowCard(true);
            setIsHover(true);
        }, 300);
    };

    return (
        <div onMouseOut={mouseLeave} onMouseOver={mouseEnter}>
            {showCard ? (
                <div className="bg-[#181818] rounded shadow shadow-black absolute hover:-translate-y-12 top-0 transition-all duration-150 ease-in hover:scale-150 hover:duration-300 hover:ease-out z-30">
                    <img alt="" className="rounded-t" src={image} />
                    <div className="flex flex-col p-4 text-[10px]">
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <i className="text-xl fa-duotone fa-play flex items-center justify-center text-black bg-white rounded-full w-7 h-7 hover:bg-[#E5E5E5]" />
                                <i className="text-3xl fa-sharp fa-solid fa-plus bg-[#222222] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white" />
                                <i className="text-base fa-light fa-thumbs-up bg-[#222222] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white" />
                            </div>
                            <i className="text-lg fa-light fa-angle-down bg-[#222222] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white" />
                        </div>
                        <div>
                            <i className="fa-light fa-high-definition fa-lg fa-thin rounded-xl" />
                        </div>
                        <div className="flex gap-2 items-center">
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
