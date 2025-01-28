import React from "react";

const Navbar: React.FC = () => {
    const toggleMenu = () => {
  document.getElementById("burger")?.classList.toggle("active");
  document.getElementById("mobileMenu")?.classList.toggle("hidden");
  document.getElementById("mobileMenu")?.classList.toggle("flex");
  document.body.classList.toggle("overflow-hidden");
};
    return (

        <div className="flex justify-between items-center mx-auto py-10 px-5 ">
            <span className={" font-bold font-k2D  tracking-0.9px text-transparent bg-clip-text bg-bg-logo text-24px laptop:text-30px z-50"}>My Portfolio:)</span>
            {/*desktop*/}
            <nav className="hidden laptop:flex ">
                <ul className="flex space-x-20 text-20px  text-white-dark  ">
                    <li><a href="" className="text-active font-bold">Logo</a></li>
                    <li><a href="" className="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="" className="">Contacts</a></li>
                </ul>
            </nav>
            {/*Mobile*/}
            <nav id="mobileMenu" className=" hidden fixed left-0 top-0 bottom-0 h-full  w-full items-center justify-center  bg-main-background   z-20 laptop:hidden">
                <ul className=" flex flex-col items-center gap-12 text-30px  text-white-dark  ">
                    <li><a href="" className="text-active font-bold">Logo</a></li>
                    <li><a href="" className="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="" className="">Contacts</a></li>
                </ul>

            </nav>

            {/*burger menu*/}
            <button id="burger"
                    className="   group relative flex justify-center items-center h-6 w-[40px] z-50 laptop:hidden "
                    onClick={toggleMenu}>
                <span className="absolute left-0 top-0 h-[2px] w-full translate-y-0 bg-white transition-transform group-[.active]:translate-y-[10px] group-[.active]:rotate-45"></span>
                <span className="absolute left-0 top-1/2 h-[2px] w-full bg-white transition-opacity group-[.active]:opacity-0"></span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transition-transform group-[.active]:-translate-y-[12px] group-[.active]:-rotate-45"></span>
            </button>
        </div>
    );
};

export default Navbar;
