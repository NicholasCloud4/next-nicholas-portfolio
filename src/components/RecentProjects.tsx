import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                Some of my{" "}
                <span className="text-blue-500">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div
                        key={id}
                        className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                    >
                        <a href={link}>
                            <PinContainer
                                title={link}
                                href={link}
                                className="text-indigo-50"
                            >
                                <div
                                    className="relative flex items-center justify-center sm:w-[570px] w-[80vw]
                             overflow-hidden sm:h-[40vh] h-[30vh] mb-10"
                                >
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#ffffff]">
                                        <img src="/bg.png" alt="bg-img" />
                                    </div>
                                    <img
                                        src={img}
                                        alt={title}
                                        className="z-10 absolute bottom-0"
                                    />
                                </div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>

                                <p className="lg:text-xl lg:font-normal font-light text-sm text-black-100">
                                    {des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, index) => (
                                            <div
                                                key={icon}
                                                className="bg-gray-200 border border-blue-500 rounded-full lg:w-10 lg:h-10 w-8 h-8
                                            flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${
                                                        5 * index + 2
                                                    }px)`,
                                                }}
                                            >
                                                <img
                                                    src={icon}
                                                    alt={icon}
                                                    className="p-2"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <p className="text-blue-500 flex lg:text-xl md:text-xs text-sm">
                                            Visit Git Hub
                                        </p>
                                        <FaLocationArrow
                                            className="ms-3"
                                            color="#3b82f6"
                                        />
                                    </div>
                                </div>
                            </PinContainer>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
