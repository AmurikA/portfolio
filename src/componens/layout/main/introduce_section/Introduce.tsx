import React from "react";
import Person from '../../../../assets/Person.png';
import InstagramLogoImg from '../../../../assets/instagram.svg';
import GitLogoImg from '../../../../assets/github.svg';
import FigmaLogoImg from '../../../../assets/figma.svg';
import sircle from "../../../../assets/sircle.svg"
const Introduce: React.FC = () => {
    return (
        <div className="container flex space-between  px-6 mx-auto py-20 pb-32">
            <div className="flex flex-col items-start w-2/4 gap-10 ">
                <div className="">
                    <span className="text-2xl">
                        Hi I am
                    </span>
                    <h1 className={"text-3xl"}>Mahmood Fazile</h1>
                </div>
                <div className="flex flex-col items-start ">
                    <h1 className="text-6xl text-orange-500 font-bold  ">Frontend Developer</h1>
                </div>
                <div className="flex justify-center gap-7">
                    <ul>
                        <li><img src={InstagramLogoImg} alt={"Tiktok Logo"}/></li>
                    </ul>
                    <ul>
                        <li><img src={GitLogoImg} alt={"Tiktok Logo"}/></li>
                    </ul>
                    <ul>
                        <li><img src={FigmaLogoImg} alt={"Tiktok Logo"}/></li>
                    </ul>
                </div>
                <div className=" ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>

                <div className={"flex items-center justify-center "}>
                    <div className="bg-orange-500 py-3  px-5 rounded-2xl">Download CV</div>
                    <img src={sircle} alt={"Tiktok Logo"} className={"px-3 "}/>
                    <h1 className={"text-gray-100 text-2xl"}>Available for Hire</h1>
                </div>
            </div>
            <div className="flex flex-shrink-0 w-2/4 justify-end relative">
                <img
                    src={Person}
                    alt="fdsf"
                    className=" object-cover w-9/12"
                />

            </div>

        </div>
    );
};

export default Introduce;