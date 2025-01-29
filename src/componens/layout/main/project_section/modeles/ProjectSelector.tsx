import React from "react";

type Project = {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
};

type ProjectSelectorProps = {
    projects: Project[];
};

const ProjectSelector: React.FC<ProjectSelectorProps> = ({projects}) => {
    return (
        <div className="w-full">
            {projects.map((project, index) => (
                <div key={index}
                     className="w-full rounded-lg shadow-lg overflow-hidden grid grid-cols-1 laptop:grid-cols-2 gap-6 p-4">
                    <div className="relative w-full ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                    <div className="flex flex-col justify-center p-4">
                        <h3 className="text-30px font-bold ">{project.title}</h3>
                        <p className="text-base mb-6">{project.subtitle}</p>
                        <p className="text-sm">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center justify-center bg-white text-black rounded-full w-10 h-10 shadow-md"
                        >
                            →
                        </a>
                    </div>
                </div>
            ))}
        </div>


    );
};

export default ProjectSelector;