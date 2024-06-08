"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import NextWhiteButton from "./NextWhiteButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("nicholas.dhannie2022@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-black-200/[0.1]",
                className
            )}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/

                background: "rgb(213,213,235)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(213,213,236,1) 52%)",
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} : h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(
                                imgClassName,
                                "object-cover, object-center"
                            )}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${
                        id === 5 && "w-full opacity-80"
                    }`}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            width={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation></BackgroundGradientAnimation>
                )}
                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#000000] z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-black dark:text-neutral-200 mb-2 mt-2 ">
                        {title}
                    </div>

                    {id === 2 && <GlobeDemo />}

                    {/* tech stack list */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-8 ">
                                {["MongoDB", "React.js", "Next.js"].map(
                                    (item) => (
                                        <span
                                            key={item}
                                            className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#858bb8] text-white-100"
                                        >
                                            {item}
                                        </span>
                                    )
                                )}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#858bb8] text-white-100" />
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8 ">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#858bb8] text-white-100" />
                                {["JavaScript", "HTML", "CSS"].map((item) => (
                                    <span
                                        key={item}
                                        className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#858bb8] text-white-100"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie
                                    options={{
                                        loop: copied,
                                        autoplay: copied,
                                        animationData: animationData,
                                        rendererSettings: {
                                            preserveAspectRatio:
                                                "xMidYMid slice",
                                        },
                                    }}
                                />
                            </div>
                            <NextWhiteButton
                                title={
                                    copied ? "Email Copied" : "Copy My Email"
                                }
                                icon={<IoCopyOutline />}
                                position="right"
                                otherClasses="!bg-[#858bb8]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};