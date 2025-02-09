import React, {useEffect} from "react";
import Header from "../componens/layout/header/Header.tsx";
import Main from "../componens/layout/main/Main.tsx";
import Footer from "../componens/layout/footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
const PortfolioPage:React.FC = () => {
     const { i18n } = useTranslation(); // ✅ Використовуємо деструктуризацію об'єкта
    const location = useLocation();

    useEffect(() => {
        const lang = location.pathname.split("/")[1]; // Отримуємо мову з URL
        if (["en", "uk"].includes(lang)) {
            i18n.changeLanguage(lang); // ✅ Міняємо мову динамічно
        }
    }, [location, i18n]);
    return (
        <div className="app">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default PortfolioPage;