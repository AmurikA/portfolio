import React from 'react';
import {useTranslation} from "react-i18next";


const Schedule: React.FC = () => {
    const {t} = useTranslation();
    const days = [
        {name: t("days.monday"), available: true},
        {name: t("days.tuesday"), available: false},
        {name: t("days.wednesday"), available: false},
        {name: t("days.thursday"), available: false},
        {name: t("days.friday"), available: true},
        {name: t("days.saturday"), available: true},
        {name: t("days.sunday"), available: true},
    ];
    return (
        <div id="schedule" className="container flex flex-col gap-5 mx-auto py-5 ">
            <div className="flex flex-col justify-center items-center py-5">
                <h1 className={"text-4xl py-3 text-heading-bg"}>{t("mySchedule")}</h1>
                <span className="text-xl text-describe-gray text-center">{t("describeSchedule")}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-5 tablet:grid-cols-3 laptop:grid-cols-4 justify-center">
                {days.map((days) => (
                    <div key={days.name} className="flex flex-col items-center gap-3">
                        <div
                            className={`w-14 rounded-xl flex items-end justify-center overflow-hidden transition-all duration-300 h-48`}
                        >
                            <div
                                className={`w-full rounded-xl ${days.available ? "bg-[#ff7a00]" : "bg-gray-800"} shadow-sm`}
                                style={{height: "100%"}}
                            />
                        </div>
                        <div className="mt-2 text-sm text-gray-300 whitespace-nowrap">{days.name}</div>
                    </div>
                ))}
            </div>
            <span className="  flex-col tablet:flex-row   text-gray-400 text-center flex items-center justify-center gap-2 mt-6">
                <span className="inline-block w-5 h-5 rounded bg-[#ff7a00]"/>
                <span>{t("statusAvailable")}</span>
                <span className="inline-block w-5 h-5 rounded bg-gray-800"/>
                <span>{t("statusBusy")}</span>
            </span>
        </div>


    );
};

export default Schedule;