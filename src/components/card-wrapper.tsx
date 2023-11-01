import {Dispatch, SetStateAction, useRef, useState} from "react";

import {useListStore} from "@/stores/list-store";

interface Props {
    image: string;
    children: React.ReactNode;
    setIsHover: Dispatch<SetStateAction<boolean>>;
}

export function CardWrapper({image, setIsHover, children}: Props) {
    const [showCard, setShowCard] = useState(false);

    const listStore = useListStore((state) => state.addToList);

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
                    <div className="flex flex-col  p-4 text-[10px]">
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <div className="flex items-center justify-center text-black bg-white rounded-full w-7 h-7">
                                    <i className="text-xl fa-duotone fa-play " />
                                </div>
                                <div className="bg-[#222222] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white">
                                    <i className="text-3xl fa-sharp fa-solid fa-plus" />
                                </div>
                                <div className="bg-[#222222] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white">
                                    <i className="text-base fa-light fa-thumbs-up" />
                                </div>
                            </div>
                            <div className="bg-[#222222] rounded-full w-7 h-7 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white">
                                <i className="text-lg fa-light fa-angle-down" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span>Info</span>
                            <span>Info</span>
                            <span>Info</span>
                        </div>
                        <div className="flex gap-4">
                            <span>Género</span>
                            <span>Género</span>
                            <span>Género</span>
                        </div>
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
    );
}
