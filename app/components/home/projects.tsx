import React, { type JSX } from "react";
import wine from '../../assets/wine.jpg';
import cake from '../../assets/cake.png';
import club from '../../assets/club.jpg';
import realestate from '../../assets/realestate.jpg';
import music from '../../assets/music.jpg';
import portfolio from '../../assets/portfolio.png';

type Project = {
    name: string;
    image: string;
    link: string;
};

const projects: Project[] = [
    { name: "E-Commerce Store", image: wine, link: "https://shopwine.netlify.app/" },
    { name: "E-Commerce Store", image: cake, link: "https://anitahkimanthi.github.io/houseofcakes/" },
    { name: "Club Website", image: club, link: "https://openinstitute-university-club.netlify.app/home" },
    { name: "Real Estate Website", image: realestate, link: "" },
    { name: "Music Search", image: music, link: "https://search-music.netlify.app/" },
    { name: "Portfolio", image: portfolio, link: "https://peninnahportfolio.netlify.app/" },
];

function Projects(): JSX.Element {
    return (
        <section id="projects" className="relative py-24 px-6 bg-gradient-to-b from-gray-950 via-indigo-900 to-gray-950">
            {/* Elegant abstract circles/background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">Projects</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.name}
                            className={`relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105`}
                            style={{ backdropFilter: 'blur(12px)' }}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-64 object-cover rounded-3xl"
                            />
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                                <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-lg text-white font-medium transition"
                                    >
                                        View Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
