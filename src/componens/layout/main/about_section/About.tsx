import React from 'react';
import ImgAnimation from "./module/ImgAnimation.tsx";
import AnurkaGit from "../../../../assets/frame/githubframe.png"


const About: React.FC = () => {
    return (
        <div className="container flex flex-col gap-5 mx-auto ">
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className={"text-4xl py-3"}>About Me</h1>
                <span className="text-xl text-describe-gray">
            User Interface and User Experience and Also video editing
                </span>
            </div>
            <div className="flex">
                <div className="w-2/4  items-center ">
                    A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes
                    of code, sculpting intangible structures that shape our technological world. With fingers poised
                    over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of
                    algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in
                    intricate patterns, weaving the fabric of programs and applications. Each keystroke is a
                    brushstroke, crafting intricate architectures and breathing life into innovative designs.In this
                    digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant
                    knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the
                    mysteries hidden within the tangled webs of code. designs.In this digital atelier.
                </div>
                <div className="w-2/4 relative flex justify-end overflow-hidden">
                    <img src={AnurkaGit} alt="Фон" className="absolute  object-cover"/>
                    <ImgAnimation/>
                </div>

            </div>
        </div>


    );
};

export default About;