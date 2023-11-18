import {useEffect, useState} from "react";

import {settings, users} from "../layout/actions-navbar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useLanguageStore} from "@/stores/language-store";
import {actionsNavbarTranslate} from "@/i18n/actions-navbar-translates";

interface Props {
    trigger: React.ReactNode;
    users: typeof users;
    settings: typeof settings;
    logout: () => void;
    mouseEnter: boolean;
}

export function Dropdown({trigger, users, settings, logout, mouseEnter}: Props) {
    const [open, setOpen] = useState(false);

    const changeLanguage = useLanguageStore((state) => state.setLanguage);
    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = actionsNavbarTranslate[language];

    useEffect(() => {
        setOpen(mouseEnter);
    }, [mouseEnter]);
    // TODO agregar timeout al close dropdown

    return (
        <DropdownMenu modal={false} open={open}>
            <DropdownMenuTrigger className="flex items-center gap-3 focus:outline-none">
                {trigger}
                <i className={`${open ? "rotate-180" : ""} transition-all fa-solid fa-caret-down`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="text-white border-4 border-gray-500 border-none rounded-none bg-black/90"
            >
                {users?.map((user) => (
                    <DropdownMenuItem key={user.id} className="flex items-center gap-2 hover:underline">
                        <img alt="user image" className="w-8 rounded" src={user.image} />
                        <h2>{user.userName[language]}</h2>
                    </DropdownMenuItem>
                ))}
                {settings?.map((setting) => (
                    <DropdownMenuItem key={setting.id} className="flex items-center gap-2">
                        <i className={setting.icon} />
                        <h2 className="w-[155px] hover:underline">{setting.text[language]}</h2>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                    <div className="flex items-center justify-center w-full gap-4">
                        <span
                            className={`cursor-pointer transition-all hover:underline ${
                                language === "EN" ? "text-white font-netflix-bold" : "text-white/50 font-netflix"
                            }`}
                            onClick={() => changeLanguage("EN")}
                        >
                            EN
                        </span>
                        <span
                            className={`cursor-pointer transition-all hover:underline ${
                                language === "ES" ? "text-white font-netflix-bold" : "text-white/50 font-netflix"
                            }`}
                            onClick={() => changeLanguage("ES")}
                        >
                            ES
                        </span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex justify-center py-2 hover:underline" onClick={logout}>
                    {textTranslated.dropdown_logout}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
