import React from "react";
import Person from '../../../../assets/Person.png';
import InstagramLogoImg from '../../../../assets/instagram.svg';
import GitLogoImg from '../../../../assets/github.svg';
import FigmaLogoImg from '../../../../assets/figma.svg';
import sircle from "../../../../assets/sircle.svg"
import vector from "../../../../assets/vector.svg"
const Introduce: React.FC = () => {
    return (
        <div className="container flex flex-col phoneLg:py-20 laptop:flex-row px-6 mx-auto  pb-32 gap-10">
            <div className="relative flex flex-col items-start gap-10 laptop:w-2/4    ">
                <img
                    src={vector}
                    alt="Background"
                    className="absolute top-0 left-0  select-none object-cover pointer-events-none"
                />
                <div className="mx-auto flex flex-col items-center laptop:mx-0 laptop:items-start ">
                    <span className="text-16px phoneLg:text-32px laptop:text-24px    ">
                        Hi I am
                    </span>
                    <h1 className={" font-bold text-white-dark text-20px phoneLg:text-36px laptop:text-28px"}>Mahmood Fazile</h1>
                </div>

                <div className="flex flex-col items-start mx-auto laptop:mx-0 ">
                    <h1 className="text-center font-black text-transparent bg-clip-text bg-bg-Front text-50px phoneLg:text-85px  laptop:text-70px laptop:text-start ">Frontend
                                                                                                                               Developer</h1>
                </div>
                <div className="flex justify-center gap-7 mx-auto laptop:mx-0">
                    <ul className="flex gap-7">
                        <li>
                            <img src={InstagramLogoImg} alt="Instagram Logo" className="w-10 h-10 phoneLg:w-16 phoneLg:h-16 laptop:w-12 laptop:h-12"/>
                        </li>
                        <li>
                            <img src={GitLogoImg} alt="Git Logo" className=" w-10 h-10 phoneLg:w-16 phoneLg:h-16 laptop:w-12 laptop:h-12"/>
                        </li>
                        <li>
                            <img src={FigmaLogoImg} alt="Figma Logo" className=" w-10 h-10 phoneLg:w-16 phoneLg:h-16 laptop:w-12 laptop:h-12"/>
                        </li>
                    </ul>
                </div>
                <div className=" mx-auto text-center text-16px phoneLg:text-24px laptop:mx-0 laptop:text-start laptop:text-20px ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>

                <div className={"flex items-center justify-center mx-auto  "}>
                    <div className="bg-orange-500 py-3 text-white text-20px px-5 rounded-2xl">Download CV</div>
                    <img src={sircle} alt={"Tiktok Logo"} className={"px-3 "}/>
                    <h1 className={"text-gray-100 text-2xl"}>Available for Hire</h1>
                </div>
            </div>
            <div className="hidden laptop:flex w-full laptop:w-2/4 justify-end relative">
                <img
                    src={Person}
                    alt="fdsf"
                    className=""
                />

            </div>

        </div>
    );
};

export default Introduce;