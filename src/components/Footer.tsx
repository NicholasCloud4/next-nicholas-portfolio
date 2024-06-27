"use client";
import React from "react";
import { socialMedia } from "@/data";

const Footer = () => {
    const handleIconClick = (link: string) => {
        window.open(link, "_blank");
    };

    return (
        <footer className="w-full pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Lets connect and take your
                    <span className="text-blue-500"> project</span> to the
                    <span className="text-blue-500"> next level</span>
                </h1>

                <div className="flex items-center md:gap-3 gap-40 pt-10">
                    {socialMedia.map((profile) => (
                        <a
                            key={profile.id}
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleIconClick(profile.link)}
                        >
                            <img
                                src={profile.img}
                                alt={profile.img}
                                width={70}
                                height={70}
                                className="cursor-pointer"
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Nicholas Dhannie
                </p>
            </div>
        </footer>
    );
};

export default Footer;
