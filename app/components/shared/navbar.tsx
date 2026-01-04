import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["about", "skills", "projects", "contact"];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 m-5">
                {/* Logo */}
                <div
                    className="text-indigo-400 font-bold text-xl cursor-pointer"
                    onClick={() => handleClick("hero")}
                >
                    Peninnah Wangari
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-100">
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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-100"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 space-y-4 text-gray-100">
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
            )}
        </nav>
    );
};

export default Navbar;
