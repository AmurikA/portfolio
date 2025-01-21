import React from "react";

// Тип для данных проекта
type Project = {
    image: string; // Ссылка на изображение
    title: string; // Название проекта
    description: string; // Описание проекта
    link: string;
};

type ProjectSelectorProps = {
    projects: Project[]; // Список проектов
};

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ projects }) => {
    return (
        <div className="flex justify-center items-center px-5 ">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="relative rounded-lg overflow-hidden shadow-md justify-center items-center  flex flex-col "
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-2/4 h-full object-cover"
                    />
                    <div className="absolute w-2/4 h-full bg-black/50 flex flex-col justify-end p-4 ">
                        {/* Описание */}
                        <h3 className="text-white text-xl font-bold mt-2">{project.title}</h3>
                        <p className="text-white text-sm mt-1">{project.description}</p>
                        {/* Кнопка */}

                             <a  href={project.link} target="_blank" rel="noreferrer" className="mt-3 bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-md">
                                →
                             </a>
                    </div>
                </div>
                ))}
        </div>
    );
};

export default ProjectSelector;