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
        <div className="w-full gap-y-6 flex flex-col ">
            {projects.map((project, index) => (
                <div key={index}
                     className="w-full rounded-lg  border border-active border-opacity-40  overflow-hidden grid grid-cols-1 laptop:grid-cols-2 gap-2 phoneLg:gap-6 p-4 ">
                    <div className="relative w-full  ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="flex flex-col h-full p-4">
                        <h3 className="text-24px font-bold  pb-2 text-heading-bg text-center phoneLg:text-28px laptop:text-left ">{project.title}</h3>
                        <p className="text-16px phoneLg:text-18px pb-6 text-center">{project.subtitle}</p>
                        <p className="text-18px  phoneLg:text-20px">{project.description}</p>
                        <div className="mt-auto self-end">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center justify-center bg-white text-black rounded-full w-10 h-10 shadow-md"
                        >
                            →
                        </a></div>
                    </div>
                </div>
            ))}
        </div>


    );
};

export default ProjectSelector;