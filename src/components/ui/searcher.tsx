import {useEffect, useRef, useState} from "react";

import moviesController from "@/controllers/movies-controller";
import {useDebounce} from "@/hooks/useDebounce";
import {useMoviesStore} from "@/stores/movies-store";

export function Searcher() {
    const [openSearch, setOpenSearch] = useState(false);
    const [inputEffect, setInputEffect] = useState(false);

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
    }, [debouncedValue]);

    useEffect(() => {
        openSearch ? window.addEventListener("click", clickOutside) : window.removeEventListener("click", clickOutside);
    }, [openSearch]);

    return (
        <>
            <div className="flex items-center cursor-pointer" id="searchContainer">
                {openSearch && (
                    <input
                        ref={searchRef}
                        autoFocus
                        className={`bg-black transition-all ${inputEffect ? "w-[200px]" : "w-0"}`}
                        placeholder="Títulos, personas, géneros"
                        onChange={(event) => onQueryChange(event?.currentTarget.value)}
                    />
                )}
                <i
                    className="text-xl cursor-pointer fa-regular fa-magnifying-glass"
                    onClick={() => {
                        handleEffect();
                        !openSearch && setOpenSearch(!openSearch);
                    }}
                />
            </div>
        </>
    );
}
