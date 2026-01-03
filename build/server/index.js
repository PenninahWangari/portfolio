import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const about = "/assets/about-WIprrp83.png";
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 px-6 bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-100 mb-4", children: "About" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 leading-relaxed", children: "I’m a full-stack developer who has worked on web and mobile applications using React, React Native, Angular, Node.js, and Python. I focus on building complete, real-world solutions—from clean user interfaces to reliable backend logic—and I’m currently exploring AI-powered features as technology continues to evolve." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: about,
        alt: "About me",
        className: "rounded-2xl shadow-lg w-full object-cover"
      }
    ) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 px-6 bg-gray-950", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-100 mb-6", children: "Get In Touch" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-400 mb-10", children: "I’m open to opportunities, collaborations, and interesting projects. If you’d like to work together or just have a question, feel free to reach out." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-6", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:penninahmuchokimike@gmail.com",
          className: "px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium",
          children: "Email Me"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:+254759559415",
          className: "px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 transition font-medium",
          children: "Call Me"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/anitakimanzi/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition font-medium",
          children: "LinkedIn"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-10 text-gray-500 text-sm", children: [
      "Email: ",
      /* @__PURE__ */ jsx("a", { href: "mailto:penninahmuchokimike@gmail.com", className: "underline", children: "penninahmuchokimike@gmail.com" }),
      " | Phone: ",
      /* @__PURE__ */ jsx("a", { href: "tel:+254759559415", className: "underline", children: "+254759559415" })
    ] })
  ] }) });
}
const bg = "/assets/bg-Cv-qdZc0.jpg";
const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center opacity-40",
        style: { backgroundImage: `url(${bg})` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gray-950 opacity-70" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold text-gray-100", children: [
        "Full-Stack Developer",
        /* @__PURE__ */ jsx("span", { className: "block text-indigo-400 mt-2", children: "Building End-to-End Applications" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-gray-400 max-w-3xl leading-relaxed", children: "I build web and mobile applications using React, React Native, Node.js, and Python. I enjoy working across the full stack and I’m currently focusing on AI-powered features that solve real problems." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection("projects"),
            className: "px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition",
            children: "View Projects"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection("contact"),
            className: "px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 transition",
            children: "Contact Me"
          }
        )
      ] })
    ] })
  ] });
};
const wine = "/assets/wine-CG-d8l4D.jpg";
const cake = "/assets/cake-ZkYgci44.png";
const club = "/assets/club-sIpXe83y.jpg";
const realestate = "/assets/realestate-Co_99QOm.jpg";
const music = "/assets/music-BU60jNTZ.jpg";
const portfolio = "/assets/portfolio-BvqfiDY9.png";
const projects = [
  { name: "E-Commerce Store", image: wine, link: "https://shopwine.netlify.app/" },
  { name: "E-Commerce Store", image: cake, link: "https://anitahkimanthi.github.io/houseofcakes/" },
  { name: "Club Website", image: club, link: "https://openinstitute-university-club.netlify.app/home" },
  { name: "Real Estate Website", image: realestate, link: "" },
  { name: "Music Search", image: music, link: "https://search-music.netlify.app/" },
  { name: "Portfolio Website", image: portfolio, link: "https://peninnah-wangari.netlify.app/" }
];
function Projects() {
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "relative py-24 px-6 bg-gradient-to-b from-gray-950 via-indigo-900 to-gray-950", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-100 mb-12 text-center", children: "Projects" }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index2) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105`,
          style: { backdropFilter: "blur(12px)" },
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: project.image,
                alt: project.name,
                className: "w-full h-64 object-cover rounded-3xl"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-white mb-2", children: project.name }),
              project.link && /* @__PURE__ */ jsx(
                "a",
                {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-lg text-white font-medium transition",
                  children: "View Project →"
                }
              )
            ] })
          ]
        },
        project.name
      )) })
    ] })
  ] });
}
const skills = {
  frontend: [
    { name: "React", level: 80 },
    { name: "React Native", level: 70 },
    { name: "Angular", level: 65 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 }
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 }
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 80 }
  ],
  focus: [
    { name: "AI Integration", level: 60 },
    { name: "End-to-End Development", level: 75 }
  ]
};
function Skills() {
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-20 px-6 bg-gray-950", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-100 mb-12 text-center", children: "Skills" }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsx(SkillGroup, { title: "Frontend", items: skills.frontend }),
      /* @__PURE__ */ jsx(SkillGroup, { title: "Backend", items: skills.backend }),
      /* @__PURE__ */ jsx(SkillGroup, { title: "Tools", items: skills.tools }),
      /* @__PURE__ */ jsx(SkillGroup, { title: "Focus", items: skills.focus })
    ] })
  ] }) });
}
function SkillGroup({ title, items }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 p-6 rounded-2xl shadow-md", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-100 mb-6", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: items.map((skill) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1 text-gray-300 text-sm", children: [
        /* @__PURE__ */ jsx("span", { children: skill.name }),
        /* @__PURE__ */ jsxs("span", { children: [
          skill.level,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-3 rounded-full bg-gray-800 overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000",
          style: { width: `${skill.level}%` }
        }
      ) })
    ] }, skill.name)) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "py-6 text-center bg-gray-950 text-gray-500 text-sm", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " · Full-Stack & AI-Focused Developer"
  ] });
}
const sections = ["about", "skills", "projects", "contact"];
const Navbar = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-0 w-full bg-gray-950 bg-opacity-90 backdrop-blur-md z-50 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto flex justify-between items-center px-6 py-4 m-5", children: [
    /* @__PURE__ */ jsx("div", { className: "text-indigo-400 font-bold text-xl cursor-pointer", onClick: () => handleClick("hero"), children: "Peninnah Wangari" }),
    /* @__PURE__ */ jsx("ul", { className: "flex gap-6 text-gray-100", children: sections.map((sec) => /* @__PURE__ */ jsx(
      "li",
      {
        className: "cursor-pointer hover:text-indigo-400 transition",
        onClick: () => handleClick(sec),
        children: sec.charAt(0).toUpperCase() + sec.slice(1)
      },
      sec
    )) })
  ] }) });
};
function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-gray-950 text-gray-100", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const index = UNSAFE_withComponentProps(function Routes() {
  return /* @__PURE__ */ jsx(Home, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-wMV1gpTa.js", "imports": ["/assets/chunk-WWGJGFF6-DaTaPSdi.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-D884mfK2.js", "imports": ["/assets/chunk-WWGJGFF6-DaTaPSdi.js"], "css": ["/assets/root-CGmHRTD8.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-o38KR8CJ.js", "imports": ["/assets/chunk-WWGJGFF6-DaTaPSdi.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-0f3e5e3d.js", "version": "0f3e5e3d", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
