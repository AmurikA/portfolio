

const Navbar: React.FC = () => {
    return (

        <div className="flex justify-between items-center px-6 py-10  ">
            <span className={"text-transparent bg-clip-text bg-gradient-to-r from-logo-gradient-start to-logo-gradient-end font-bold text-3xl"}>My Portfolio:)</span>
            <div className="hidden md:flex md:space-x-20 font-roboto items-center">
                <a href="" className="font-roboto">About</a>
                <a href="">Projects</a>
                <a href="" className="bg-bg-button px-12 py-4 rounded-full text-black w-full text-center">Contacts</a>
            </div>
        </div>
    );
};

export default Navbar;
