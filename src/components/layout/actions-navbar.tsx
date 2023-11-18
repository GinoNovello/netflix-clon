import {useState} from "react";

import {Dropdown} from "../dropdown/dropdown";
import {Searcher} from "../ui/searcher";

import {useLanguageStore} from "@/stores/language-store";
import {actionsNavbarTranslate} from "@/i18n/actions-navbar-translates";

export const settings = [
    {
        id: 0,
        icon: "fa-regular fa-pen text-xl w-8 flex justify-center text-[#B3B3B3]",
        text: {
            EN: "Manage Profiles",
            ES: "Administrar perfiles",
        },
    },
    {
        id: 1,
        icon: "fa-regular fa-retweet text-xl w-8 flex justify-center text-[#B3B3B3]",
        text: {
            EN: "Transfer Profile",
            ES: "Transferir perfil",
        },
    },
    {
        id: 2,
        icon: "fa-regular fa-user text-2xl w-8 flex justify-center text-[#B3B3B3]",
        text: {
            EN: "Account",
            ES: "Cuenta",
        },
    },
    {
        id: 3,
        icon: "fa-regular fa-circle-question text-2xl w-8 flex justify-center text-[#B3B3B3]",
        text: {
            EN: "Help Center",
            ES: "Centro de ayuda",
        },
    },
];

export const users = [
    {
        id: 0,
        image: "/User1.png",
        userName: {
            EN: "User",
            ES: "Usuario",
        },
    },
];

export function ActionsNavbar() {
    const [mouseEnter, setMouseEnter] = useState(false);

    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = actionsNavbarTranslate[language];

    return (
        <div className="flex items-center gap-6 text-white">
            <Searcher />
            <span className="cursor-pointer">{textTranslated.kids}</span>
            <i className="text-lg cursor-pointer fa-regular fa-bell" />
            <div onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
                <Dropdown
                    logout={() => alert("Logout")}
                    mouseEnter={mouseEnter}
                    settings={settings}
                    trigger={
                        <div className="flex items-center cursor-pointer">
                            <img alt="user admin" className="w-8 rounded" src="/User1.png" />
                        </div>
                    }
                    users={users}
                />
            </div>
        </div>
    );
}
