import React, { type JSX } from "react";

function Contact(): JSX.Element {
    return (
        <section id="contact" className="py-24 px-6 bg-gray-950">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-100 mb-6">
                    Get In Touch
                </h2>

                <p className="text-lg text-gray-400 mb-10">
                    I’m open to opportunities, collaborations, and interesting projects.
                    If you’d like to work together or just have a question, feel free to reach out.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {/* Email */}
                    <a
                        href="mailto:penninahmuchokimike@gmail.com"
                        className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium"
                    >
                        Email Me
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+254759559415"
                        className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 transition font-medium"
                    >
                        Call Me
                    </a>

                    {/* Optional: LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/anitakimanzi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition font-medium"
                    >
                        LinkedIn
                    </a>

                    {/* Optional: GitHub */}
                    {/* <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition font-medium"
                    >
                        GitHub
                    </a> */}
                </div>

                {/* Optional: Text with contact info */}
                <p className="mt-10 text-gray-500 text-sm">
                    Email: <a href="mailto:penninahmuchokimike@gmail.com" className="underline">penninahmuchokimike@gmail.com</a> | Phone: <a href="tel:+254712345678" className="underline">+254 712 345 678</a>
                </p>
            </div>
        </section>
    );
}

export default Contact;
