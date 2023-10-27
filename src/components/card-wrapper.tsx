interface Props {
    image: string;
    children: React.ReactNode;
    isHover: boolean;
}

export function CardWrapper({image, isHover, children}: Props) {
    return (
        <>
            {isHover ? (
                <div className="absolute bg-[#181818] shadow shadow-black w-[434px] rounded">
                    <div className="static">
                        <img alt="" className="rounded-t" src={image} />
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <i className="fa-duotone fa-play " />
                                <div className="bg-[#222222] rounded-full w-8 h-8 flex items-center justify-center border-2 border-[#8B8B8B]">
                                    <i className="fa-sharp fa-light fa-plus" />
                                </div>
                                <i className="fa-light fa-thumbs-up" />
                            </div>
                            <i className="fa-light fa-angle-down" />
                        </div>
                        <div className="flex">
                            <span className="">a</span>
                            <span className="">b</span>
                            <h2 className="">d</h2>
                        </div>
                        <div className="flex">
                            <h2 className="">s</h2>
                            <h2 className="">d</h2>
                            <h2 className="">f</h2>
                        </div>
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    );
}
