import React from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
    const toggleMenu = () => {
  document.getElementById("burger")?.classList.toggle("active");
  document.getElementById("mobileMenu")?.classList.toggle("hidden");
  document.getElementById("mobileMenu")?.classList.toggle("flex");
  document.body.classList.toggle("overflow-hidden");
};
     const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
    return (

      <div className="flex justify-between items-center mx-auto py-10 px-5">
            <span className="font-bold font-k2D tracking-[0.9px] text-transparent bg-clip-text bg-bg-logo text-[24px] laptop:text-[30px] z-50">
                My Portfolio:)
            </span>

            {/* Language Switcher */}
            <div className="flex space-x-2 absolute right-5 top-5">
                <button
                    onClick={() => changeLanguage("en")}
                    className={`px-2 py-1 text-sm font-bold rounded ${
                        i18n.language === "en" ? "bg-white text-black" : "bg-gray-500 text-white"
                    }`}
                >
                    En
                </button>
                <button
                    onClick={() => changeLanguage("ua")}
                    className={`px-2 py-1 text-sm font-bold rounded ${
                        i18n.language === "ua" ? "bg-white text-black" : "bg-gray-500 text-white"
                    }`}
                >
                    Ua
                </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden laptop:flex">
                <ul className="flex space-x-20 text-[20px] text-white-dark">
                    <li><a href="" className="text-active font-bold">{t("logo")}</a></li>
                    <li><a href="">{t("about")}</a></li>
                    <li><a href="">{t("projects")}</a></li>
                    <li><a href="">{t("contact")}</a></li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav id="mobileMenu" className="hidden fixed left-0 top-0 bottom-0 h-full w-full items-center justify-center bg-main-background z-20 laptop:hidden">
                <ul className="flex flex-col items-center gap-12 text-[30px] text-white-dark">
                    <li><a href="" className="text-active font-bold">{t("logo")}</a></li>
                    <li><a href="">{t("about")}</a></li>
                    <li><a href="">{t("projects")}</a></li>
                    <li><a href="">{t("contact")}</a></li>
                </ul>
            </nav>

            {/* Burger Menu */}
            <button
                id="burger"
                className="group relative flex justify-center items-center h-6 w-[40px] z-50 laptop:hidden"
                onClick={toggleMenu}
            >
                <span className="absolute left-0 top-0 h-[2px] w-full translate-y-0 bg-white transition-transform group-[.active]:translate-y-[10px] group-[.active]:rotate-45"></span>
                <span className="absolute left-0 top-1/2 h-[2px] w-full bg-white transition-opacity group-[.active]:opacity-0"></span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transition-transform group-[.active]:-translate-y-[12px] group-[.active]:-rotate-45"></span>
            </button>
        </div>
    );
};

export default Navbar;
