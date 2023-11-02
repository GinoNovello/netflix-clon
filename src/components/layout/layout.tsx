import {Outlet} from "react-router-dom";

import {Footer} from "./footer";
import {Navbar} from "./navbar";

export function Layout() {
    return (
        <div className="bg-custom-black min-h-screen justify-between flex flex-col font-netflix overflow-x-hidden pt-[68px]">
            <Navbar />
            <div className="flex justify-center w-full px-[60px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
