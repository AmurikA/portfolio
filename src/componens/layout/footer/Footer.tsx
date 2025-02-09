import React from 'react';
import InstagramLogoImg from "../../../assets/instagram.svg";
import GitLogoImg from "../../../assets/github.svg";
import FigmaLogoImg from "../../../assets/figma.svg";
import {useTranslation} from "react-i18next";

const Footer: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div className=" w-full flex m-auto pb-10 rounded-t-3xl bg-[#FFFFFF] bg-opacity-5 tablet:w-4/5">
            <div className="flex flex-col  m-auto h-full gap-5 pt-5 ">
                <h1 className={" px-5 font-bold font-k2D text-center  tracking-0.9px text-transparent bg-clip-text bg-bg-logo text-30px laptop:text-40px z-50"}>{t("footerTitle")}</h1>
                <div className=" flex flex-col items-center laptop:flex-row laptop:justify-center">
                    <span className={"text-20px"}>{t("footerEmail")}</span>
                    <a href={""} className={"ml-1 underline text-20px  "}>sasha24heroy@gmail.com</a>
                </div>
                <div className="flex justify-center gap-7 mx-auto laptop:mx-0">
                    <ul className="flex gap-7">
                        <li>
                            <a href={""}> <img src={InstagramLogoImg}
                                               alt="Instagram Logo"
                                               className="w-12px h-12px phoneLg:w-14 phoneLg:h-14 laptop:w-12 laptop:h-12"/>
                            </a>
                        </li>
                        <li>
                            <a href={""}> <img src={GitLogoImg}
                                               alt="Git Logo"
                                               className=" w-12px h-12px phoneLg:w-14 phoneLg:h-14 laptop:w-12 laptop:h-12"/>
                            </a>
                        </li>
                        <li>
                            <a href={""}> <img src={FigmaLogoImg}
                                               alt="Figma Logo"
                                               className=" w-12px h-12px phoneLg:w-14 phoneLg:h-14 laptop:w-12 laptop:h-12"/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Footer;