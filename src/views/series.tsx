import {Helmet} from "react-helmet";

import {navbarTranslate} from "@/i18n/navbar-translates";
import {useLanguageStore} from "@/stores/language-store";

export function Series() {
    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = navbarTranslate[language];

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
                {textTranslated.navbar_sections.series}
            </h4>
        </div>
    );
}
