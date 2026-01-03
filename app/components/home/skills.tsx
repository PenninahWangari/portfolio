import React, { type JSX } from "react";

const skills = {
    frontend: ["React", "React Native", "Angular", "HTML", "CSS"],
    backend: ["Node.js", "Python", "REST APIs"],
    tools: ["Git", "GitHub", "Postman"],
    focus: ["AI Integration", "End-to-End Development"],
};

function Skills(): JSX.Element {
    return (
        <section className="py-20 px-6 bg-gray-950">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-100 mb-10">
                    Skills
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    <SkillGroup title="Frontend" items={skills.frontend} />
                    <SkillGroup title="Backend" items={skills.backend} />
                    <SkillGroup title="Tools" items={skills.tools} />
                    <SkillGroup title="Focus" items={skills.focus} />
                </div>
            </div>
        </section>
    );
}

type SkillGroupProps = {
    title: string;
    items: string[];
};

function SkillGroup({ title, items }: SkillGroupProps): JSX.Element {
    return (
        <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
                {title}
            </h3>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
