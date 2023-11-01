import {Helmet} from "react-helmet";

export function Series() {
    return (
        <div className="flex flex-col w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Series — Netflix</title>
                <link href="http://localhost:5173/series" rel="canonical" />
            </Helmet>
            <h4
                className={`text-white text-4xl h-[68px] transition-all duration-500 w-full fixed flex items-center font-netflix-medium`}
            >
                Series
            </h4>
        </div>
    );
}
