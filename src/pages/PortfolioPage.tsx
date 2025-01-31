import React from "react";
import Header from "../componens/layout/header/Header.tsx";
import Main from "../componens/layout/main/Main.tsx";
import Footer from "../componens/layout/footer/Footer.tsx";
const PortfolioPage:React.FC = () => {
    return (
        <div className="app">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default PortfolioPage;