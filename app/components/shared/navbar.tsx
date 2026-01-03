import React from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

const Navbar: React.FC = () => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-gray-950 bg-opacity-90 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 mt-10">
                <div className="text-indigo-400 font-bold text-xl cursor-pointer" onClick={() => handleClick("hero")}>
                    Peninnah Wangari
                </div>
                <ul className="flex gap-6 text-gray-100">
                    {sections.map((sec) => (
                        <li
                            key={sec}
                            className="cursor-pointer hover:text-indigo-400 transition"
                            onClick={() => handleClick(sec)}
                        >
                            {sec.charAt(0).toUpperCase() + sec.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
