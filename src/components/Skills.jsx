import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillIcon from "./SkillIcon";
import { skillIconMap } from "./../utils/skillIconMap";

const skillGroups = {
  "Programming Languages": ["Java", "Python", "C", "C++"],
  Frontend: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  Backend: [
    "Node.js",
    "Spring Boot",
    "Flask",
    "FastAPI",
    "Express",
    "RabbitMQ",
  ],
  Databases: ["Postgres", "MySQL", "MongoDB", "Redis"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "GCP", "Linux", "NGINX"],
  Tools: ["Git", "GitHub", "GitLab", "VS Code", "Figma", "Vite"],
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32">
      <div className="bg-radial-glow absolute inset-0 opacity-50" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mono text-primary mb-4 block text-sm tracking-wider">
            Skills & Tools
          </span>
          <h2 className="section-heading">
            Technologies I <span className="text-gradient-blue">work with</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {Object.entries(skillGroups).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-primary mb-6 text-lg font-semibold">
                {category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {skills.map((label) => {
                  console.log(label, skillIconMap[label]);

                  return (
                    skillIconMap[label] && (
                      <SkillIcon
                        key={label}
                        src={skillIconMap[label]}
                        label={label}
                      />
                    )
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
