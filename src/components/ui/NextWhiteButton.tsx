import React from "react";

const NextWhiteButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className={`shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] 
        px-10 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear ${otherClasses}`}
        >
            <div className="flex justify-between items-center gap-4">
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </div>
        </button>
    );
};

export default NextWhiteButton;
