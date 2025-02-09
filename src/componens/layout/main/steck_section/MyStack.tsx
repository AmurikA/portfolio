import FigmaStack from "../../../../assets/FigmaStack.png"
import TailwindStack from "../../../../assets/TailwindStack.png"
import TSStack from "../../../../assets/TSStack.png"
import ReactStack from "../../../../assets/ReactStack.png"
import ReduxStack from "../../../../assets/ReduxStack.png"
import NodeStack from "../../../../assets/NodeStack.png"
import {useTranslation} from "react-i18next";

const MyStack = () => {
    const { t } = useTranslation();
    const stack = [
        {img: FigmaStack, name: "FigmaStack"},
        {img: TailwindStack, name: "TailwindStack"},
        {img: TSStack, name: "TSStack"},
        {img: ReduxStack, name: "ReduxStack"},
        {img: ReactStack, name: "ReactStack"},
        {img: NodeStack, name: "NodeStack"},
    ];

    return (
        <div id="myStack" className="container flex flex-col gap-5 mx-auto py-5 ">
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className={"text-4xl py-3 text-heading-bg"}>{t("myStack")}</h1>
                <span className="text-xl text-describe-gray text-center">{t("techDescribe")}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-5 tablet:grid-cols-3 laptop:grid-cols-6 justify-center">
                {stack.map((stack, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={stack.img} alt={stack.name} className="w-9/12 h-auto"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyStack;