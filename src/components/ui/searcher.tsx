import {useEffect, useRef, useState} from "react";

import moviesController from "@/controllers/movies-controller";
import {useDebounce} from "@/hooks/useDebounce";
import {useMoviesStore} from "@/stores/movies-store";
import {actionsNavbarTranslate} from "@/i18n/actions-navbar-translates";
import {useLanguageStore} from "@/stores/language-store";

export function Searcher() {
    const [openSearch, setOpenSearch] = useState(false);
    const [inputEffect, setInputEffect] = useState(false);

    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = actionsNavbarTranslate[language];

    const searchRef = useRef<null>(null);
    const {debouncedValue, onQueryChange} = useDebounce(500);

    const setMovieData = useMoviesStore((state) => state.setSearchMovieData);

    const clickOutside = (event: any) => {
        const searchBarId = event.target.parentElement.id === "searchContainer";

        searchBarId
            ? setOpenSearch(true)
            : setTimeout(() => {
                  setOpenSearch(false);
              }, 150);
        setInputEffect(false);
    };

    const handleEffect = () => {
        setTimeout(() => {
            setInputEffect(true);
        }, 10);
    };

    const querySearch = async () => {
        const res = await moviesController.searchMovies({query: debouncedValue});

        if (res.ok) {
            setMovieData(res.data.results);
        }
    };

    useEffect(() => {
        debouncedValue.length > 0 ? querySearch() : setMovieData(undefined);
    }, [debouncedValue]); //TODO arreglar esto

    useEffect(() => {
        openSearch ? window.addEventListener("click", clickOutside) : window.removeEventListener("click", clickOutside);
    }, [openSearch]);

    return (
        <button className="relative flex items-center cursor-pointer" id="searchContainer">
            <i
                className="text-xl cursor-pointer fa-regular fa-magnifying-glass"
                onClick={() => {
                    handleEffect();
                    !openSearch && setOpenSearch(!openSearch);
                }}
            />
            {openSearch && (
                <input
                    ref={searchRef}
                    autoFocus
                    className={`bg-black transition-all duration-500 outline-none ${
                        inputEffect ? "w-[230px] py-2" : "w-0"
                    }`}
                    placeholder={textTranslated.searcher}
                    onChange={(event) => onQueryChange(event?.currentTarget.value)}
                />
            )}
        </button>
    );
}
