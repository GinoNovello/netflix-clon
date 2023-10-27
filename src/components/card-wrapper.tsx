interface Props {
    image: string;
    children: React.ReactNode;
    isHover: boolean;
}

export function CardWrapper({image, isHover, children}: Props) {
    return (
        <>
            {isHover ? (
                <div className="static">
                    <img alt="" className="" src={image} />
                    <div>
                        <div>
                            <i className="" />
                            <i className="" />
                            <i className="" />
                        </div>
                        <i className="" />
                    </div>
                    <div>
                        <span className="">a</span>
                        <span className="">b</span>
                        <h2 className="">d</h2>
                    </div>
                    <div>
                        <h2 className="">s</h2>
                        <h2 className="">d</h2>
                        <h2 className="">f</h2>
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    );
}
