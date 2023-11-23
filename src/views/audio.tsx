import {Helmet} from "react-helmet";

import {navbarTranslate} from "@/i18n/navbar-translates";
import {useLanguageStore} from "@/stores/language-store";

export function Audio() {
    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = navbarTranslate[language];

    return (
        <div className="flex flex-col w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix</title>
                <link href="http://localhost:5173/audio" rel="canonical" />
            </Helmet>
            <h4 className={`text-white text-4xl h-[68px] transition-all duration-500 w-full fixed flex items-center`}>
                {textTranslated.navbar_sections.browse_languages}
            </h4>
        </div>
    );
}
