import React, { type JSX } from "react";

function About(): JSX.Element {
    return (
        <section className="py-20 px-6 bg-gray-900">
            <div className="max-w-4xl mx-auto">
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
        </section>
    );
}

export default About;
