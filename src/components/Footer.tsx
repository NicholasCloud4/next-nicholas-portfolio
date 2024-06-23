import React from "react";
import { socialMedia } from "@/data";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-90"
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-blue-500">your </span>
                    project to the next level
                </h1>
                <p>Lets Connect!</p>

                <div className="flex items-center md:gap-3 gap-40">
                    {socialMedia.map((profile) => (
                        <a
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={profile.img}
                                alt={profile.id}
                                width={70}
                                height={70}
                                className="cursor-pointer"
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Nicholas Dhannie
                </p>
            </div>
        </footer>
    );
};

export default Footer;
