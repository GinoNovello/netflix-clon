import {NavLink} from "react-router-dom";

import {ActionsNavbar} from "./actions-navbar";

import {useScroll} from "@/hooks/useScroll";
import {navbarTranslate} from "@/i18n/navbar-translates";
import {useLanguageStore} from "@/stores/language-store";

export function Navbar() {
    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = navbarTranslate[language];

    const {isVisible} = useScroll({scrollSize: 68});

    const navActiveStyle = "text-white font-netflix-medium";
    const navDefaultStyle = "hover:text-[#B3B3B3] cursor-pointer transition-all";

    return (
        <nav
            className={`${
                isVisible ? "bg-custom-black" : "bg-custom-black/0"
            } transition-all duration-500 text-custom-white flex justify-between items-center h-[68px] px-[60px] fixed top-0 z-20 text-sm w-full
            `}
            style={{
                background: isVisible ? "" : "linear-gradient(180deg, rgba(0,0,0,.7) 10%, transparent)",
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
                        {textTranslated.navbar_sections.my_list}
                    </NavLink>
                    <NavLink className={({isActive}) => (isActive ? navActiveStyle : navDefaultStyle)} to={"/audio"}>
                        {textTranslated.navbar_sections.browse_languages}
                    </NavLink>
                </ul>
            </div>
            <ActionsNavbar />
        </nav>
    );
}
