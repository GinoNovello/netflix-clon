import {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";

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

    const navActiveStyle = "text-white font-netflix-medium";
    const navDefaultStyle = "hover:text-[#B3B3B3] cursor-pointer transition-all";

    return (
        <nav
            className={`${
                color ? "bg-[#141414]" : "bg-[#141414]/0"
            } transition-all duration-500 text-primary flex justify-between items-center h-[68px] px-[60px] fixed top-0 z-10 text-sm w-full
            `}
            style={{
                background: color ? "" : "linear-gradient(180deg, rgba(0,0,0,.7) 10%, transparent)",
            }}
        >
            <div className="flex items-center gap-11">
                <img
                    alt="Netflix logo"
                    className="w-[92.5px] h-[31px]"
                    height={31}
                    src="/netflix-logo.svg"
                    width={92.5}
                />
                <ul className="flex gap-5">
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/home"}>
                        Inicio
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/series"}>
                        Series
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/movies"}>
                        Películas
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/latest"}>
                        Novedades populares
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/list"}>
                        Mi lista
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/audio"}>
                        Explora por idiomas
                    </NavLink>
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
                    className="text-xl cursor-pointer fa-regular fa-magnifying-glass"
                    onClick={() => {
                        handleEffect();
                        setOpenSearch(!openSearch);
                    }}
                />
            </div>
        </nav>
    );
}
