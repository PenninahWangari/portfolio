import React from "react";
import bg from "../../assets/bg.jpg";

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950 pt-24 md:pt-0">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>

            {/* Overlay to darken image */}
            <div className="absolute inset-0 bg-gray-950 opacity-70"></div>

            {/* Content */}
            <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-100">
                    Full-Stack Developer
                    <span className="block text-indigo-400 mt-2 text-base sm:text-lg md:text-xl lg:text-2xl">
                        Building End-to-End Applications
                    </span>
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
                    I build web and mobile applications using React, React Native, Node.js,
                    and Python. I enjoy working across the full stack and I’m currently
                    focusing on AI-powered features that solve real problems.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Scroll to Projects */}
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
                    >
                        View Projects
                    </button>

                    {/* Scroll to Contact */}
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
