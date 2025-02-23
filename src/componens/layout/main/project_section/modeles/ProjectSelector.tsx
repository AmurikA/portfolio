import React, {useState} from "react";
import PopUpVideo from "../../../../modules/popUp/PopUpVideo.tsx";
import {useTranslation} from "react-i18next";

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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const {t} = useTranslation();
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
                    <div className="flex flex-col h-full p-4 " >
                        <h3 className="text-24px font-bold  pb-2 text-heading-bg text-center phoneLg:text-28px laptop:text-left ">{project.title}</h3>
                        <p className="text-16px phoneLg:text-18px pb-6 text-center">{project.subtitle}</p>
                        <p className="text-18px  phoneLg:text-20px">{project.description}</p>
                        <div className="mt-auto flex space-x-4   justify-center p-5   ">
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="px-4 py-2 text-16px  phoneLg:text-18px bg-gray-text text-white rounded-lg shadow-md hover:bg-active transition"
                            >
                                {t("project_btn1")}
                            </button>


                        </div>
                    </div>
                </div>
            ))}
            {selectedProject && (
                <PopUpVideo project={selectedProject} onClose={() => setSelectedProject(null)}/>
            )}
        </div>


    );
};

export default ProjectSelector;