import {Helmet} from "react-helmet";

export function Movies() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Películas — Netflix</title>
                <link href="http://localhost:5173/movies" rel="canonical" />
            </Helmet>
        </>
    );
}
