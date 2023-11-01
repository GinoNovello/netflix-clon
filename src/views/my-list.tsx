import {Helmet} from "react-helmet";

import {useListStore} from "@/stores/list-store";
import {CardWrapper} from "@/components/card-wrapper";
import {useScroll} from "@/hooks/useScroll";

export function MyList() {
    const {isVisible} = useScroll({scrollSize: 68});
    const list = useListStore((state) => state.list);

    return (
        <div className="flex flex-col w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix</title>
                <link href="http://localhost:5173/list" rel="canonical" />
            </Helmet>
            <h4
                className={`${
                    isVisible ? "bg-[#141414]" : "bg-transparent"
                } text-white text-4xl h-[68px] transition-all duration-500 w-full fixed flex items-center`}
            >
                Mi lista
            </h4>
            <div className="grid gap-x-[6px] gap-y-20 grid-cols-6 pt-52">
                {list.map((movie) => (
                    <CardWrapper key={movie.id} genres={movie.genre_ids} movie={movie}>
                        <img
                            alt="image"
                            className="w-full min-h-[163px] rounded"
                            src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                        />
                    </CardWrapper>
                ))}
            </div>
        </div>
    );
}
