

const Navbar: React.FC = () => {
    return (
        <div className="flex justify-between items-center px-6 py-10  ">
            <span className={"text-transparent bg-clip-text bg-gradient-to-r from-logo-gradient-start to-logo-gradient-end font-bold text-3xl"}>My Portfolio:)</span>
            <div className="space-x-20 font-roboto ">
                <a href="" className={"font-roboto "}>About</a>
                <a href="">Projects</a>
                <a href={""} className={"bg-bg-button px-12 py-4 rounded-full text-black"}>Contacts</a>
            </div>
        </div>
    );
};

export default Navbar;
