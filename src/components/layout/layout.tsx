import {Outlet} from "react-router-dom";

import {Footer} from "./footer";
import {Navbar} from "./navbar";

export function Layout() {
    return (
        <div className="bg-[#141414] min-h-screen justify-between flex flex-col font-netflix overflow-x-hidden pt-[68px]">
            <Navbar />
            <div className="flex justify-center w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
