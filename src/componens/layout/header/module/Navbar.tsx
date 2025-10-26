import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {Link} from "react-scroll";

const Navbar: React.FC = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const [active, setActive] = useState("home");
    const toggleMenu = () => {
        document.getElementById("burger")?.classList.toggle("active");
        document.getElementById("mobileMenu")?.classList.toggle("hidden");
        document.getElementById("mobileMenu")?.classList.toggle("flex");
        document.body.classList.toggle("overflow-hidden");
    };
    const handleSetActive=(id:string)=>{
        setActive(id);
    }
    const handleSetActiveMobile=(id:string)=>{
        setActive(id);
        toggleMenu();
    }

    const changeLanguage = (lang: string) => {
        navigate(lang, {replace: true});
        if (window.innerWidth < 1024) {
            toggleMenu();
        }
    }; useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about","schedule", "myStack", "projects", "quote"];
            let defaultSection = sections[0]; // За замовчуванням "home"
            let minDistance = Infinity;

            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top - window.innerHeight / 2);

                    if (distance < minDistance) {
                        minDistance = distance;
                        defaultSection = id;
                    }
                }
            });

            setActive(defaultSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (

        <div className=" container flex  justify-between items-center mx-auto py-10 px-5  bg-main-background z-20  " >
            <span className="font-bold font-k2D tracking-[0.9px] text-transparent bg-clip-text bg-bg-logo text-[24px] laptop:text-[30px] z-50">
                My Portfolio:)
            </span>

            {/* Language Switcher */}
            <div className=" hidden laptop:flex space-x-2 absolute right-5 top-5">
                <button
                    onClick={() => changeLanguage("/en")}
                    className={`px-2 py-1 text-sm font-bold rounded ${
                        i18n.language === "en" ? "bg-white text-black" : "bg-gray-500 text-white"
                    }`}
                >
                    En
                </button>
                <button
                    onClick={() => changeLanguage("/ua")}
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
                    <li><Link to="home"
                              smooth={true}
                              duration={500}
                              offset={-100}
                              className={`cursor-pointer transition-colors duration-300 ${active === "home" ? "text-active" : "text-white-dark"}`}
                              onClick={() => handleSetActive("home")}>{t("logo")}</Link></li>
                    <li><Link to="about"
                              smooth={true}
                              duration={500}
                              offset={-200}
                              className={`cursor-pointer transition-colors duration-300 ${active === "about" ? "text-active" : "text-white-dark"}`}
                              onClick={() => handleSetActive("about")}>{t("about")}</Link>
                    </li>
                    <li><Link to="schedule"
                              smooth={true}
                              duration={500}
                              offset={-100}
                              className={`cursor-pointer transition-colors duration-300 ${active === "schedule" ? "text-active" : "text-white-dark"}`}
                              onClick={() => handleSetActive("schedule")}>{t("schedule")}</Link>
                    </li>

                    <li><Link to="myStack"
                              smooth={true}
                              duration={500}
                              offset={-350}
                              className={`cursor-pointer transition-colors duration-300 ${active === "myStack" ? "text-active" : "text-white-dark"}`}
                              onClick={() => handleSetActive("myStack")}>{t("stack")}</Link>
                    </li>
                    <li><Link to="projects"
                              smooth={true}
                              duration={500}
                              offset={-200}
                              className={`cursor-pointer transition-colors duration-300 ${active === "projects" ? "text-active" : "text-white-dark"}`}
                              onClick={() => handleSetActive("projects")}>{t("projects")}</Link></li>
                    <li><Link to="quote"
                              smooth={true}
                              duration={500}
                              offset={-100}
                              className={`cursor-pointer transition-colors duration-300 ${active === "quote" ? "text-active" : "text-white-dark"}`}
                              onClick={() => handleSetActive("quote")}>{t("quote")}</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            <nav id="mobileMenu"
                 className="hidden fixed left-0 top-0 bottom-0 h-full w-full items-center justify-center bg-main-background z-10 laptop:hidden">
                <ul className="flex flex-col items-center  gap-10 text-[25px] text-white-dark ">
                    <li ><Link to="home" smooth={true} duration={500} offset={-120}  className={`cursor-pointer text-active font-bold ${active === "home" ? "text-active" : "text-white-dark"}`} onClick={()=>handleSetActiveMobile("home")}>{t("logo")}</Link></li>
                    <li><Link to="about" smooth={true} duration={500} offset={-120} className={`cursor-pointer text-active font-bold ${active === "about" ? "text-active" : "text-white-dark"}`}  onClick={()=>handleSetActiveMobile("about")}>{t("about")}</Link>
                    </li>
                    <li><Link to="myStack" smooth={true} duration={500} offset={-120}  className={`cursor-pointer text-active font-bold ${active === "myStack" ? "text-active" : "text-white-dark"}`} onClick={()=>handleSetActiveMobile("myStack")}>{t("stack")}</Link>
                    </li>
                    <li><Link to="projects" smooth={true} duration={500} offset={-120} className={`cursor-pointer text-active font-bold ${active === "projects" ? "text-active" : "text-white-dark"}`}  onClick={()=>handleSetActiveMobile("projects")}>{t("projects")}</Link>
                    </li>
                    <li><Link to="quote" smooth={true} duration={500} offset={-120}  className={`cursor-pointer text-active font-bold ${active === "quote" ? "text-active" : "text-white-dark"}`}  onClick={()=>handleSetActiveMobile("quote")}>{t("Quote")}</Link>
                    </li>
                    <div className=" flex space-x-10 ">
                        <button
                            onClick={() => changeLanguage("/en")}
                            className={`px-4 py-4 text-sm font-bold rounded ${
                                i18n.language === "en" ? "bg-white text-black" : "bg-gray-500 text-white"
                            }`}
                        >
                            En
                        </button>
                        <button
                            onClick={() => changeLanguage("/ua")}
                            className={`px-4 py-4 text-sm font-bold rounded ${
                                i18n.language === "ua" ? "bg-white text-black" : "bg-gray-500 text-white"
                            }`}
                        >
                            Ua
                        </button>
                    </div>
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
