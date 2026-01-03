import React, { type JSX } from "react";
import about from "../../assets/about.png"

function About(): JSX.Element {
    return (
        <section id="about" className="py-20 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Text */}
                <div className="md:w">
                    <h2 className="text-3xl font-bold text-gray-100 mb-4">
                        About
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I’m a full-stack developer who has worked on web and mobile applications
                        using React, React Native, Angular, Node.js, and Python. I focus on
                        building complete, real-world solutions—from clean user interfaces to
                        reliable backend logic—and I’m currently exploring AI-powered features
                        as technology continues to evolve.
                    </p>
                </div>

                {/* Right: Image */}
                <div className="md:w-1/2">
                    <img
                        src={about}
                        alt="About me"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
