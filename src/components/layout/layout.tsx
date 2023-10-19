import {Outlet} from "react-router-dom";

import {Navbar} from "./navbar";

export function Layout() {
    return (
        <div className="bg-[#141414] font-netflix">
            <Navbar />
            <div className="w-full min-h-[calc(100vh-68px)] flex justify-center">
                <Outlet />
            </div>
        </div>
    );
}
