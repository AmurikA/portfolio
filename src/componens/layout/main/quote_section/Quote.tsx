import React from "react";

const Quote: React.FC = () => {
    return (
        <div className="container flex flex-col items-center mx-auto py-20">
            <div className="text-center text-white font-bold opacity-60">
                <p className="text-30px italic  tablet:text-50px laptop:text-60px ">"Good design is a language, not a style"</p>
                <p className="text-20px italic  mt-2 tablet:text-26px ">- Massimo Vignelli</p>
            </div>
        </div>
    );
};

export default Quote;