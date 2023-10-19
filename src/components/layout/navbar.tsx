import {useEffect, useRef, useState} from "react";

import moviesController from "@/controllers/movies-controller";
import {useDebounce} from "@/hooks/useDebounce";
import {useMoviesStore} from "@/stores/movies-store";

export function Navbar() {
    const [color, setColor] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [inputEffect, setInputEffect] = useState(false);
    const setMovieData = useMoviesStore((state) => state.setSearchMovieData);
    const searchRef = useRef<null>(null);
    const {debouncedValue, onQueryChange} = useDebounce(1000);
    const clickOutside = (event: any) => {
        const searchBarId = event.target.parentElement.id === "searchContainer";

        searchBarId
            ? setOpenSearch(true)
            : setTimeout(() => {
                  setOpenSearch(false);
              }, 150);
        setInputEffect(false);
    };

    const changeColor = () => {
        window.scrollY >= 68 ? setColor(true) : setColor(false);
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
        debouncedValue && querySearch();
    }, [debouncedValue]);

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        () => window.removeEventListener("scroll", changeColor);
    }, []);

    useEffect(() => {
        openSearch ? window.addEventListener("click", clickOutside) : window.removeEventListener("click", clickOutside);
    }, [openSearch]);

    return (
        <nav
            className={`${
                color ? "bg-[#141414]" : "bg-[#141414]/0"
            } transition-all duration-500 text-primary flex justify-between items-center h-[68px] px-[60px] sticky top-0 z-10 text-sm`}
            style={{background: color ? " " : "linear-gradient(180deg, rgba(0,0,0,.7) 10%, transparent)"}}
        >
            <div className="flex gap-11 items-center">
                <img
                    alt="Netflix logo"
                    className="w-[92.5px] h-[31px]"
                    height={31}
                    src="/netflix-logo.svg"
                    width={92.5}
                />
                <ul className="flex gap-5">
                    <li>Inicio</li>
                    <li>Series</li>
                    <li>Películas</li>
                    <li>Novedades populares</li>
                    <li>Mi lista</li>
                    <li>Explora por idiomas</li>
                </ul>
            </div>
            <div className="flex items-center" id="searchContainer">
                {openSearch && (
                    <input
                        ref={searchRef}
                        autoFocus
                        className={`bg-black transition-all ${inputEffect ? "w-[200px]" : "w-0"}`}
                        placeholder="search"
                        onChange={(event) => onQueryChange(event?.currentTarget.value)}
                    />
                )}
                <i
                    className="fa-regular fa-magnifying-glass text-xl cursor-pointer"
                    onClick={() => {
                        handleEffect();
                        setOpenSearch(!openSearch);
                    }}
                />
            </div>
        </nav>
    );
}
