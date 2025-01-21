import React, { useEffect, useState } from "react";
import frame1 from "../../../../../assets/frame/frame1.svg";
import frame2 from "../../../../../assets/frame/frame2.svg";
import frame3 from "../../../../../assets/frame/frame3.svg";
import frame4 from "../../../../../assets/frame/frame4.svg";
import frame5 from "../../../../../assets/frame/frame5.svg";

const ImgAnimation: React.FC = () => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const frames = [frame1, frame2, frame3, frame4, frame5];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
        }, 3000); // Смена кадра каждые 3 секунды
        return () => clearInterval(interval);
    }, [frames.length]);

    return (
        <div className="relative w-[450px] h-[300px] overflow-hidden rounded-lg">
            {frames.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`frame-${index}`}
                    className={`absolute inset-0 object-cover  transition-all duration-500 ease-in-out
                        ${
                            index === currentFrame
                                ? "opacity-100 translate-y-0 scale-100 blur-0"
                                : "opacity-0 translate-y-5 scale-95 blur-sm"
                        }`}
                />
            ))}
        </div>
    );
};

export default ImgAnimation;
