import React from 'react';
import ProjectSelector from "./modeles/ProjectSelector.tsx";
import Project1 from "../../../../assets/mainProject.png"

const Project: React.FC = () => {
    const projects = [
        {
            image: Project1,
            title: "Сайт Студенського Самоврядування Дуікт",
            subtitle: "Проєкт, у якому я зрозумів, що таке бути розробником.",
            description: "Це моя перша командна робота, у якій ми розробили повноцінний вебсайт із функціоналом. Користувачі можуть додавати меми та проекти.Сайт має систему адміністрування для управління контентом",
            link: "https://github.com/DUIKTSSD/ssd"
        },

    ];
    return (
        <div className="container flex flex-col gap-5 mx-auto p-4">
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className={"text-4xl py-3"}>Portfolio & Project</h1>
                <span className="text-xl text-describe-gray">My work is on the web</span>
            </div>
            <ProjectSelector projects={projects}/>
        </div>
    );
};

export default Project;