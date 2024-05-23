import {Link} from "react-router-dom";

import {userSelectionTranslate} from "@/i18n/user-selection-translates";
import {useLanguageStore} from "@/stores/language-store";

export function UserSelection() {
    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = userSelectionTranslate[language];

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen text-white gap-14 bg-custom-black font-netflix">
            <span className="md:text-[3.5vw] sm:max-w-full max-w-[300px] text-[30px] text-center leading-9">
                {textTranslated.question}
            </span>
            <Link
                className="group text-[#808080] relative hover:text-custom-white text-base md:text-[1.5vw] gap-3 flex flex-col items-center"
                to="/home"
            >
                <div className="relative flex flex-col items-center">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent rounded group-hover:border-custom-white" />
                    <img alt="user image" className="max-w-[192px] min-w-[100px] w-[10vw] rounded" src="/User1.png" />
                </div>
                <span className="text-base md:text-[1.5vw]">{textTranslated.user}</span>
            </Link>
            <button className="text-[#808080] tracking-widest text-sm md:text-[1.2vw] py-3 px-8 outline-1 outline hover:text-white -mb-8 mt-8">
                {textTranslated.manage}
            </button>
        </div>
    );
}
