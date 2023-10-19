import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import moviesController from "@/controllers/movies-controller";
import {MovieDetail} from "@/types/movies/types";

export function Detail() {
    const [movie, setMovie] = useState<undefined | MovieDetail>(undefined);
    const param = useParams();
    const kevin = async () => {
        const res = await moviesController.getMovie({movieId: param.id});

        if (res.ok) {
            setMovie(res.data);
        }
    };

    useEffect(() => {
        kevin();
    }, [param.id]);

    return (
        <div className="">
            <h2 className="Movies">Netflix</h2>
            <Link to={"/"}>Home</Link>
            <img alt="" src={`http://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} />
        </div>
    );
}
