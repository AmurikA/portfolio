import React from "react";
import {useTranslation} from "react-i18next";

const Quote: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div id={"quote"} className="container flex flex-col items-center mx-auto py-20
        px-5">
            <div className="text-center text-white font-bold opacity-60">
                <p className="text-30px italic  tablet:text-50px laptop:text-60px ">"{t("quoteSection")}"</p>
                <p className="text-20px italic  mt-2 tablet:text-26px ">- {t("quoteAuthor")}</p>
            </div>
        </div>
    );
};

export default Quote;