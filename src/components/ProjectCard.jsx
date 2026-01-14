import { motion } from "framer-motion";
import { skillIconMap } from "./../utils/skillIconMap";

const ProjectCard = ({ project, onClick, compact = false }) => {
  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group border-border/40 from-card/90 to-card/60 hover:border-primary/40 hover:shadow-primary/10 relative cursor-pointer overflow-hidden rounded-xl border bg-linear-to-br hover:shadow-xl ${compact ? "p-6" : "min-h-65 p-7"}`}
    >
      {/* Top Accent */}
      <div className="from-primary/60 via-primary/20 absolute inset-x-0 top-0 h-0.5 bg-linear-to-r to-transparent" />

      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="group-hover:text-primary text-base leading-snug font-semibold transition-colors">
            {project.title}
          </h3>

          <span className="border-border/50 text-muted-foreground shrink-0 rounded-full border px-2 py-0.5 text-xs">
            {project.date}
          </span>
        </div>

        {/* Badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <span
              key={badge.key}
              className={`rounded-md border px-2 py-0.5 text-xs font-medium ${badge.className}`}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Icons */}
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tags.map(
            (tag) =>
              skillIconMap[tag] && (
                <img
                  key={tag}
                  src={skillIconMap[tag]}
                  alt={tag}
                  title={tag}
                  className="h-8 w-8 opacity-90 transition hover:opacity-100"
                />
              ),
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
