import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";

import { projects } from "./../utils/projects.data";
import ProjectCard from "./ProjectCard";
import { skillIconMap } from "../utils/skillIconMap";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="section-heading">
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
        </motion.div>

        {/* Featured */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-muted-foreground mb-8 text-center text-xl">
          Other Relevant Projects
        </h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              compact
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card relative w-full max-w-3xl p-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4"
                onClick={() => setSelectedProject(null)}
              >
                <X />
              </button>

              <h2 className="mb-2 text-2xl font-bold">
                {selectedProject.title}
              </h2>

              <span className="text-muted-foreground mb-4 block text-sm">
                {selectedProject.date}
              </span>

              <p className="text-muted-foreground mb-6">
                {selectedProject.longDescription}
              </p>
              <div className="mb-6 flex flex-wrap gap-3">
                {selectedProject.tags.map(
                  (tag) =>
                    skillIconMap[tag] && (
                      <img
                        key={tag}
                        src={skillIconMap[tag]}
                        alt={tag}
                        title={tag}
                        className="h-10 w-10"
                      />
                    ),
                )}
              </div>

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
