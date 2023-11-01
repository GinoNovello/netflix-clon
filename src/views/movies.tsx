import {Helmet} from "react-helmet";

export function Movies() {
    return (
        <div className="flex flex-col w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Películas — Netflix</title>
                <link href="http://localhost:5173/movies" rel="canonical" />
            </Helmet>
            <h4
                className={`text-white text-4xl h-[68px] transition-all duration-500 w-full fixed flex items-center font-netflix-medium`}
            >
                Películas
            </h4>
        </div>
    );
}
