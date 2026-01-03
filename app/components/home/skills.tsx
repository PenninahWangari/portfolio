import React, { type JSX } from "react";

type Skill = {
    name: string;
    level: number; // 0-100
};

const skills = {
    frontend: [
        { name: "React", level: 80 },
        { name: "React Native", level: 70 },
        { name: "Angular", level: 65 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
    ],
    backend: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
    ],
    tools: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 80 },
    ],
    focus: [
        { name: "AI Integration", level: 60 },
        { name: "End-to-End Development", level: 75 },
    ],
};

function Skills(): JSX.Element {
    return (
        <section id="skills" className="py-20 px-6 bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">
                    Skills
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
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
    items: Skill[];
};

function SkillGroup({ title, items }: SkillGroupProps): JSX.Element {
    return (
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-100 mb-6">{title}</h3>
            <ul className="space-y-4">
                {items.map((skill) => (
                    <li key={skill.name}>
                        {/* Skill name and percentage */}
                        <div className="flex justify-between mb-1 text-gray-300 text-sm">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>

                        {/* Gradient bar */}
                        <div className="w-full h-3 rounded-full bg-gray-800 overflow-hidden">
                            <div
                                className="h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
