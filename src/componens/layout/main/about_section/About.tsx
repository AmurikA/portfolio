import React from 'react';
import ImgAnimation from "./module/ImgAnimation.tsx";
import AnurkaGit from "../../../../assets/frame/githubframe.png"


const About: React.FC = () => {
    return (
        <div id={"about"} className="container flex flex-col gap-5 mx-auto px-5">
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className={"text-4xl py-3 text-heading-bg"}>About Me</h1>
                <span className="text-xl text-describe-gray text-center">What I want
                </span>
            </div>
            <div className="grid grid-cols-1  gap-5 laptop:grid-cols-2 laptop:items-start  ">
                <div className=" text-16px text-justify space-y-4  laptop:text-20px pb-5 ">
                    <p>З самого дитинства мене захоплював процес створення сайтів і можливість власноруч втілювати власні
                    ідеї. Зараз я студент, який активно опановує фронтенд-розробку та вивчає сучасні технології, щоб
                    перетворити своє захоплення на професію.</p>

                   <p> Хоча я ще не маю комерційного досвіду, я вже брав участь у навчальному проєкті, де разом із командою
                    створював сайт для студентського самоврядування ДУІКТ.У рамках цього проєкту я займався розробкою
                    дизайну, а також його реалізацією за допомогою React
                    Це дало мені цінний досвід у розробці як передньої, так і задньої частини сайту, а також можливість
                    відчути весь процес створення проєкту з
                    нуля.</p>

                    <p>Я завжди прагну вчитися, експериментувати та вдосконалювати свої навички, щоб у майбутньому
                       реалізовувати цікаві ідеї на професійному рівні..</p>

                </div>
                <div className="relative flex justify-center overflow-hidden">
                    <img src={AnurkaGit} alt="Фон" className="absolute  object-cover"/>
                    <ImgAnimation/>
                </div>

            </div>
        </div>


    );
};

export default About;