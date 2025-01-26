import React from "react";

const Navbar: React.FC = () => {
    return (

        <div className="flex justify-between items-center px-6 py-10  ">
            <span className={" font-bold font-k2D text-3xl tracking-0.9px text-transparent bg-clip-text bg-bg-logo"}>My Portfolio:)</span>
            <div className="hidden  text-white-dark text-20px laptop:flex laptop:space-x-20   ">
                <a href="" className="text-active font-bold">Logo</a>
                <a href="" className="">About</a>
                <a href="">Projects</a>
                <a href="" className="">Contacts</a>
            </div>
        </div>
    );
};

export default Navbar;
