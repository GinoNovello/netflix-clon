import {footerTranslate} from "@/i18n/footer-translates";
import {useLanguageStore} from "@/stores/language-store";

export function Footer() {
    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = footerTranslate[language];

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
                    <li className={linkStyle}>{textTranslated.footer_sections.audio}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.help}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.gift}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.media}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.investor}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.jobs}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.terms_of_use}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.privacy}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.legal}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.cookie}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.corporate}</li>
                    <li className={linkStyle}>{textTranslated.footer_sections.contact}</li>
                </ul>
                <button className="text-[13px] px-[6.5px] py-1 hover:text-white border border-[#808080]">
                    {textTranslated.service}
                </button>
                <div className="py-[15px] text-[11px]">© 1997-2023 Netflix, Inc.</div>
            </div>
        </footer>
    );
}
