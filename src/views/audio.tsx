import {Helmet} from "react-helmet";

export function Audio() {
    return (
        <div className="flex flex-col w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix</title>
                <link href="http://localhost:5173/audio" rel="canonical" />
            </Helmet>
            <h4 className={`text-white text-4xl h-[68px] transition-all duration-500 w-full fixed flex items-center`}>
                Explora por idiomas
            </h4>
        </div>
    );
}
