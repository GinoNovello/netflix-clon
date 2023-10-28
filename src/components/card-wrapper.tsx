import {Dispatch, SetStateAction, useRef, useState} from "react";

interface Props {
    image: string;
    children: React.ReactNode;
    setIsHover: Dispatch<SetStateAction<boolean>>;
}

export function CardWrapper({image, setIsHover, children}: Props) {
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
                    <div className="p-4">
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <div className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
                                    <i className="text-xl fa-duotone fa-play " />
                                </div>
                                <div className="bg-[#222222] rounded-full w-8 h-8 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white">
                                    <i className="fa-sharp fa-solid fa-plus" />
                                </div>
                                <div className="bg-[#222222] rounded-full w-8 h-8 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white">
                                    <i className="text-base fa-light fa-thumbs-up" />
                                </div>
                            </div>
                            <div className="bg-[#222222] rounded-full w-8 h-8 flex items-center justify-center border-2 border-[#8B8B8B] hover:border-white">
                                <i className="text-lg fa-light fa-angle-down" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="">a</span>
                            <span className="">b</span>
                            <h2 className="">d</h2>
                        </div>
                        <div className="flex gap-4">
                            <h2 className="">s</h2>
                            <h2 className="">d</h2>
                            <h2 className="">f</h2>
                        </div>
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
    );
}
