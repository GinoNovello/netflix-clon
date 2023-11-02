import {Link} from "react-router-dom";

export function UserSelection() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen text-white bg-custom-black font-netflix">
            <span className="text-[67px] py-11">¿Quién está viendo ahora?</span>
            <Link
                className="text-[#808080] relative hover:text-custom-white text-2xl gap-3 flex flex-col items-center"
                to={"/home"}
            >
                <div className="absolute top-0 left-0 w-[192px] h-[192px] bg-transparent hover:border-custom-white hover:border-[4px] rounded" />
                <img alt="user image" className="w-[192px] rounded" src="/User1.png" />
                <span>Usuario</span>
            </Link>
            <div className="pt-24">
                <button className="text-[#808080] text-2xl py-3 px-8 outline-1 outline hover:text-white">
                    Administrar perfiles
                </button>
            </div>
        </div>
    );
}
