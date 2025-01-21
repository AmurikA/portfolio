import React from "react";
import Header from "../componens/layout/header/Header.tsx";
import Main from "../componens/layout/main/Main.tsx";
const PortfolioPage:React.FC = () => {
    return (
        <div className="app">
            <Header/>
            <Main/>
        </div>
    );
};

export default PortfolioPage;