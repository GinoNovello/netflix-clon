export function Footer() {
    const linkStyle = "hover:underline cursor-pointer";
    const socialStyle = "cursor-pointer";

    return (
        <footer className="flex justify-center pt-32">
            <div className="text-[#808080] w-[980px]">
                <div className="text-white flex gap-7 pb-[14.4px] text-2xl pl-2">
                    <i className={`fa-brands fa-facebook-f ${socialStyle}`} />
                    <i className={`fa-brands fa-instagram ${socialStyle}`} />
                    <i className={`fa-brands fa-twitter ${socialStyle}`} />
                    <i className={`fa-brands fa-youtube ${socialStyle}`} />
                </div>
                <ul className="grid grid-cols-4 text-[13px] gap-3 pb-8">
                    <li className={linkStyle}>Audio descriptivo</li>
                    <li className={linkStyle}>Centro de ayuda</li>
                    <li className={linkStyle}>Tarjetas de regalo</li>
                    <li className={linkStyle}>Prensa</li>
                    <li className={linkStyle}>Relaciones con inversionistas</li>
                    <li className={linkStyle}>Empleo</li>
                    <li className={linkStyle}>Términos de uso</li>
                    <li className={linkStyle}>Privacidad</li>
                    <li className={linkStyle}>Avisos legales</li>
                    <li className={linkStyle}>Preferencias de cookies</li>
                    <li className={linkStyle}>Informacion corporativa</li>
                    <li className={linkStyle}>Contáctenos</li>
                </ul>
                <button className="text-[13px] px-[6.5px] py-1 hover:text-white border border-[#808080]">
                    Código de servicio
                </button>
                <div className="py-[15px] text-[11px]">© 1997-2023 Netflix, Inc.</div>
            </div>
        </footer>
    );
}
