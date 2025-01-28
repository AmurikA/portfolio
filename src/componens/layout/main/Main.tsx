import Indroduce from "./introduce_section/Introduce.tsx"
import About from "./about_section/About.tsx";
import Project from "./project_section/Project.tsx";
import MyStack from "./steck_section/MyStack.tsx";

const Main = () => {
    return (
        <div>
            <Indroduce/>
            <About/>
            <MyStack/>
            <Project/>
        </div>
    );
};

export default Main;