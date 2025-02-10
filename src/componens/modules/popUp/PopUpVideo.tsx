import React from 'react';
import video from '../../../assets/ssd.mp4'
type PopUpVideoProps = {
    project: {
        title: string;
    };
    onClose: () => void;
};
const PopUpVideo: React.FC<PopUpVideoProps> = ({ project, onClose }) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
                {/* Кнопка закриття */}
                <button
                    className="absolute top-2 right-2 text-black text-2xl"
                    onClick={onClose}
                >
                    ×
                </button>

                <h2 className="text-xl font-bold mb-4">{project.title}</h2>

                {/* Відео */}
                <div className="relative w-full aspect-video">
                    <iframe
                        className="w-full h-full"
                        src={video}
                        title="Project Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default PopUpVideo;
