export function Footer() {
    return (
        <footer className="flex justify-center pt-32">
            <div className="text-[#808080] w-[980px]">
                <div className="text-white flex gap-7 pb-[14.4px] text-2xl pl-2">
                    <i className="fa-brands fa-facebook-f" />
                    <i className="fa-brands fa-instagram" />
                    <i className="fa-brands fa-twitter" />
                    <i className="fa-brands fa-youtube" />
                </div>
                <ul className="grid grid-cols-4 text-[13px] gap-3 pb-8">
                    <li>Audio descriptivo</li>
                    <li>Centro de ayuda</li>
                    <li>Tarjetas de regalo</li>
                    <li>Prensa</li>
                    <li>Relaciones con inversionistas</li>
                    <li>Empleo</li>
                    <li>Términos de uso</li>
                    <li>Privacidad</li>
                    <li>Avisos legales</li>
                    <li>Preferencias de cookies</li>
                    <li>Informacion corporativa</li>
                    <li>Contáctenos</li>
                </ul>
                <button className="text-[13px] px-[6.5px] py-1 hover:text-white border border-[#808080]">
                    Código de servicio
                </button>
                <div className="py-[15px] text-[11px]">© 1997-2023 Netflix, Inc.</div>
            </div>
        </footer>
    );
}
