import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import {ActionsNavbar} from "./actions-navbar";

import {useLanguageStore} from "@/stores/language-store";
import {navbarTranslate} from "@/i18n/navbar-translates";

export function Navbar() {
    const [color, setColor] = useState(false);

    const changeLanguage = useLanguageStore((state) => state.setLanguage);
    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = navbarTranslate[language];

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
                        {textTranslated.navbar_sections.home}
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/series"}>
                        {textTranslated.navbar_sections.series}
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/movies"}>
                        {textTranslated.navbar_sections.movies}
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/latest"}>
                        {textTranslated.navbar_sections.new_popular}
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/list"}>
                        {textTranslated.navbar_sections.mylist}
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/audio"}>
                        {textTranslated.navbar_sections.browse_languages}
                    </NavLink>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <ActionsNavbar />
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
            </div>
        </nav>
    );
}
