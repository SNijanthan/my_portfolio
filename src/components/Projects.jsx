import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Employee Review System",
    description: [
      "Developed a secure, role-based review platform using JWT with HTTP-only cookies for session management",
      "Created modular Express APIs with validation and middleware-based access control.",
      "Enabled real-time frontend updates using Redux Toolkit and Axios for smooth user interaction",
      "Structured the backend as modular services, separating concerns like auth, users, and reviews for clean scalability",
      "Ensured robust protection of feedback routes, tested with 50+ simulated users",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
    ],
    image:
      "https://www.shutterstock.com/image-vector/laptop-notebook-computer-icon-on-600nw-1090162007.jpg", // Add images to public/images or use URLs
    github: "https://github.com/SNijanthan/employee-review-system-backend",
    demo: "https://employee-review-system-frontend.vercel.app/",
  },
  {
    title: "Placement Cell Management System",
    description: [
      "Built a full-stack placement portal with CRUD operations for students, interviews, and results.",
      "Implemented CSV export for interview results and integrated Axios for real-time data sync",
      "Structured 10+ RESTful endpoints with secure JWT authentication and custom middleware",
      "Enabled efficient filtering and search for student records and interview data to streamline admin workflows",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
    ],
    image:
      "https://www.shutterstock.com/image-vector/laptop-notebook-computer-icon-on-600nw-1090162007.jpg", // Add images to public/images or use URLs
    github: "https://github.com/SNijanthan/placementCell---backend",
    demo: "https://placement-cell-frontend-chi.vercel.app/",
  },
  {
    title: "DevTinder",
    description: [
      "Built a Tinder-style app for developers featuring secure profile creation and connection flows",
      "Implemented JWT auth with cookie-based sessions and global state via Redux.",
      "Developed APIs for authentication, profile management, and connection requests",
      "Managed consistent state across routes with React Router and centralized Redux store",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
    ],
    image:
      "https://www.shutterstock.com/image-vector/laptop-notebook-computer-icon-on-600nw-1090162007.jpg",
    github: "https://github.com/SNijanthan/devTinder-backend",
    demo: null,
  },
  {
    title: "Netflix Clone",
    description: [
      "Created a responsive UI with Firebase auth and session-based route protection.",
      "Integrated TMDB API to fetch and display trailers, now-playing, and trending movies.",
      "Added GPT-powered movie suggestion search, improving user engagement and discovery.",
      "Used custom hooks and Redux slices to manage movies, user state, and GPT data cleanly.",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase,",
      "Redux Toolkit,",
      "OpenAI GPT",
      "TMDB API",
    ],
    image:
      "https://www.shutterstock.com/image-vector/laptop-notebook-computer-icon-on-600nw-1090162007.jpg",
    github: "https://github.com/SNijanthan/Netflix-clone",
    demo: "https://funny-caramel-e63317.netlify.app/",
  },
];

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-5 pb-0"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="font-sequel text-2xl sm:text-3xl md:text-4xl tracking-widest mb-3">
          PROJECTS
        </h1>
        <div className="h-1 w-16 sm:w-20 mx-auto rounded-3xl bg-green-700 mb-5"></div>
        <p className="font-internet text-sm sm:text-base text-gray-300">
          Here are some of the projects I’ve built, showcasing real-world
          applications and scalable solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-8 h-8 rounded-full object-cover"
              />
              <h2 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1 mb-4">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="bg-green-800 text-white text-xs px-2 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <FaGithub /> GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="h-[1px] opacity-20 bg-gray-400 mt-12"></div>
    </motion.section>
  );
};

export default Projects;
