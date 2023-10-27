import {Searcher} from "../ui/searcher";

import {useLanguageStore} from "@/stores/language-store";

export function ActionsNavbar() {
    const changeLanguage = useLanguageStore((state) => state.setLanguage);
    const language = useLanguageStore((state) => state.languageValue);

    return (
        <div className="flex items-center gap-6 text-white">
            <div className="flex items-center" id="searchContainer">
                <div className="flex items-center gap-2">
                    <span
                        className={`cursor-pointer transition-all ${
                            language === "EN" ? "text-white font-netflix-bold" : "text-white/50 font-netflix"
                        }`}
                        onClick={() => changeLanguage("EN")}
                    >
                        EN 🔫
                    </span>
                    <span
                        className={`cursor-pointer transition-all ${
                            language === "ES" ? "text-white font-netflix-bold" : "text-white/50 font-netflix"
                        }`}
                        onClick={() => changeLanguage("ES")}
                    >
                        ES 🐂
                    </span>
                </div>
            </div>
            <Searcher />
            <span className="cursor-pointer">Niños</span>
            <i className="text-lg cursor-pointer fa-regular fa-bell" />
            <div className="flex items-center gap-3 cursor-pointer group">
                <img alt="user admin" className="w-8 rounded" src="/User1.png" />
                <i className="transition-all fa-solid fa-caret-down group-hover:rotate-180" />
            </div>
        </div>
    );
}
