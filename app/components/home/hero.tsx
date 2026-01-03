import React from "react";

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100">
                Full-Stack Developer
                <span className="block text-indigo-400 mt-2">
                    Building End-to-End Applications
                </span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-3xl leading-relaxed">
                I build web and mobile applications using React, React Native, Node.js,
                and Python. I enjoy working across the full stack and I’m currently
                focusing on AI-powered features that solve real problems.
            </p>

            <div className="mt-10 flex gap-4">
                <a
                    href="/projects"
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
                >
                    View Projects
                </a>

                <a
                    href="/contact"
                    className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default Hero;
