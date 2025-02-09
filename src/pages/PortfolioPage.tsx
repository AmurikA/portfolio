import React, {useEffect} from "react";
import Header from "../componens/layout/header/Header.tsx";
import Main from "../componens/layout/main/Main.tsx";
import Footer from "../componens/layout/footer/Footer.tsx";
import { useTranslation } from "react-i18next";
import {useLocation} from "react-router-dom";
const PortfolioPage:React.FC = () => {
     const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
     const lang = location.hash.split("/")[1] || location.pathname.split("/")[1]; // Извлекаем язык из пути или хэша
    if (["en", "ua"].includes(lang)) {
      i18n.changeLanguage(lang); // Если язык правильный, меняем его
    } else {
      i18n.changeLanguage("ua"); // Если язык не найден, ставим по умолчанию 'ua'
    }
  }, [location, i18n]);
    return (
        <div className="app">
            <Header/>
            <Main />
            <Footer/>
        </div>
    );
};

export default PortfolioPage;