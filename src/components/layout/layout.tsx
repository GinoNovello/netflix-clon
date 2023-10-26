import {Outlet} from "react-router-dom";

import {Footer} from "../footer";

import {Navbar} from "./navbar";

export function Layout() {
    return (
        <div className="bg-[#141414] font-netflix overflow-x-hidden pt-[68px]">
            <Navbar />
            <div className="w-full flex justify-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
