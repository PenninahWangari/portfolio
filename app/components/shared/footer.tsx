import React, { type JSX } from "react";

function Footer(): JSX.Element {
    return (
        <footer className="py-6 text-center bg-gray-950 text-gray-500 text-sm">
            © {new Date().getFullYear()} · Full-Stack & AI-Focused Developer
        </footer>
    );
}

export default Footer;
