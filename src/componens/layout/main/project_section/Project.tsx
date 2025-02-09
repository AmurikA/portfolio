import React from 'react';
import ProjectSelector from "./modeles/ProjectSelector.tsx";
import {useTranslation} from "react-i18next";

const Project: React.FC = () => {
    const {t} = useTranslation();
    const projects = t("myProjects", {returnObjects: true}) as {
        image: string;
        title: string;
        subtitle: string;
        description: string;
        link: string;
    }[];
    return (
        <div className="container flex flex-col gap-5 mx-auto p-4">
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className={"text-4xl py-3 text-heading-bg"}>{t("projectSection")}</h1>
                <span className="text-xl text-describe-gray">{t("projectSubtext")}</span>
            </div>
            <ProjectSelector projects={projects}/>
        </div>
    );
};

export default Project;