import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import {ActionsNavbar} from "./actions-navbar";

export function Navbar() {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        window.scrollY >= 68 ? setColor(true) : setColor(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        () => window.removeEventListener("scroll", changeColor);
    }, []);

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
            <ActionsNavbar />
        </nav>
    );
}
