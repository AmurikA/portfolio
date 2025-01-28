import React from "react";
import Person from '../../../../assets/Person.png';
import InstagramLogoImg from '../../../../assets/instagram.svg';
import GitLogoImg from '../../../../assets/github.svg';
import FigmaLogoImg from '../../../../assets/figma.svg';
import sircle from "../../../../assets/sircle.svg"
import vector from "../../../../assets/vector.svg"

const Introduce: React.FC = () => {
    return (
        <div className="container flex flex-col py-1 phoneLg:py-10 laptop:flex-row px-6 mx-auto  gap-10 ">
            <div className="relative flex flex-col items-start gap-10 laptop:w-2/4    ">
                <img
                    src={vector}
                    alt="Background"
                    className="absolute top-0 left-0  select-none object-cover pointer-events-none"
                />
                <div className="mx-auto flex flex-col items-center laptop:mx-0 laptop:items-start ">
                    <span className="text-20px phoneLg:text-32px laptop:text-24px    ">
                        Hi I am
                    </span>
                    <h1 className={" font-bold text-white-dark text-24px phoneLg:text-36px laptop:text-28px"}>Kotasov
                                                                                                              Oleksandr</h1>
                </div>

                <div className="flex flex-col items-start mx-auto laptop:mx-0 ">
                    <h1 className="text-center font-black text-transparent bg-clip-text bg-bg-Front text-70px phoneLg:text-85px  laptop:text-70px laptop:text-start ">Frontend
                                                                                                                                                                      Developer</h1>
                </div>
                <div className="flex justify-center gap-7 mx-auto laptop:mx-0">
                    <ul className="flex gap-7">
                        <li>
                            <img src={InstagramLogoImg}
                                 alt="Instagram Logo"
                                 className="w-14 h-14 phoneLg:w-16 phoneLg:h-16 laptop:w-12 laptop:h-12"/>
                        </li>
                        <li>
                            <img src={GitLogoImg}
                                 alt="Git Logo"
                                 className=" w-14 h-14 phoneLg:w-16 phoneLg:h-16 laptop:w-12 laptop:h-12"/>
                        </li>
                        <li>
                            <img src={FigmaLogoImg}
                                 alt="Figma Logo"
                                 className=" w-14 h-14 phoneLg:w-16 phoneLg:h-16 laptop:w-12 laptop:h-12"/>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto px-5 space-y-4  text-16px phoneLg:text-24px laptop:mx-0 laptop:text-start laptop:text-20px">
                    <p>
                    З самого дитинства мене захоплювала розробка сайтів та можливість створювати щось нове власними
                    руками.</p>
                    <p>
                    Я завжди прагну розвиватися, вдосконалювати свої вміння та досягати більшого, щоб реалізовувати свої
                    ідеї на достойному рівні!</p>
                </div>
                <div className={"items-center justify-center w-full mx-auto flex flex-col  tablet:flex-row laptop:mx-0 laptop:justify-start "}>
                    <div className="bg-orange-500 p-5 rounded-2xl text-white text-center text-24px  phoneLg:text-30px tablet:p-5 tablet:text-24px laptop:text-20px px-5">
                        Download CV
                    </div>
                    <div className="flex items-center my-3 tablet:ml-5">
                        <img src={sircle} alt={"Tiktok Logo"} className={" px-3 my-3 tablet:my-0 tablet:ml-5"}/>
                        <h1 className={"text-gray-100 rounded-2xl text-center text-14px  phoneLg:text-20px"}>
                            Available for Hire
                        </h1>
                    </div>
                </div>


            </div>
            <div className="hidden laptop:flex w-full laptop:w-2/4 justify-center   ">
                <img
                    src={Person}
                    alt="fdsf"
                    className="h-3/5 desktop:h-3/4"
                />

            </div>

        </div>
    );
};

export default Introduce;