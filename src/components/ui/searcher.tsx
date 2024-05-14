import {useEffect, useRef, useState} from "react";

import moviesController from "@/controllers/movies-controller";
import {useDebounce} from "@/hooks/useDebounce";
import {useMoviesStore} from "@/stores/movies-store";
import {actionsNavbarTranslate} from "@/i18n/actions-navbar-translates";
import {useLanguageStore} from "@/stores/language-store";

export function Searcher() {
    const [openSearch, setOpenSearch] = useState(false);

    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = actionsNavbarTranslate[language];

    const searchRef = useRef<null | HTMLButtonElement>(null);
    const {debouncedValue, onQueryChange} = useDebounce(500);

    const setMovieData = useMoviesStore((state) => state.setSearchMovieData);

    const querySearch = async () => {
        const res = await moviesController.searchMovies({query: debouncedValue});

        if (res.ok) {
            setMovieData(res.data.results);
        }
    };

    const clickOutside = (event: MouseEvent) => {
        if (!searchRef.current?.contains(event.target as Node)) setOpenSearch(false);
    };

    useEffect(() => {
        openSearch ? window.addEventListener("click", clickOutside) : window.removeEventListener("click", clickOutside);

        () => window.removeEventListener("click", clickOutside);
    }, [openSearch]);

    useEffect(() => {
        debouncedValue.length > 0 ? querySearch() : setMovieData(undefined);
    }, [debouncedValue]); //TODO arreglar esto

    return (
        <button ref={searchRef} className="relative flex items-center cursor-pointer">
            <i
                className="text-xl cursor-pointer fa-regular fa-magnifying-glass"
                onClick={() => {
                    setOpenSearch(true);
                }}
            />
            <input
                autoFocus
                className={`bg-black transition-all duration-500 outline-none ${openSearch ? "w-[230px] py-2" : "w-0"}`}
                placeholder={textTranslated.searcher}
                onChange={(event) => onQueryChange(event?.currentTarget.value)}
            />
        </button>
    );
}
