import React from 'react';
import ImgAnimation from "./module/ImgAnimation.tsx";
import AnurkaGit from "../../../../assets/frame/githubframe.png"
import {useTranslation} from "react-i18next";


const About: React.FC = () => {
   const { t } = useTranslation();
    return (
        <div id="about" className="container flex flex-col gap-5 mx-auto px-5">
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className={"text-4xl py-3 text-heading-bg"}>{t("aboutMe")}</h1>
                <span className="text-xl text-describe-gray text-center">{t("aboutDescribe")}
                </span>
            </div>
            <div className="grid grid-cols-1  gap-5 laptop:grid-cols-2 laptop:items-start  ">
                <div className=" text-16px text-justify space-y-4  laptop:text-20px pb-5 "  dangerouslySetInnerHTML={{__html: t("myChild")}}/>
                <div className="relative flex justify-center overflow-hidden">
                    <img src={AnurkaGit} alt="Фон" className="absolute  object-cover"/>
                    <ImgAnimation/>
                </div>

            </div>
        </div>


    );
};

export default About;