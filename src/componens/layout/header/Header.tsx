import Navbar from "./module/Navbar.tsx";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-main-background ">
            <Navbar/>
        </header>
    );
};

export default Header;