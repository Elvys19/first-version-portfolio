import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { projectCategories, projects, type Project } from "../data/portfolio";
import { fadeUp, viewportOnce } from "../lib/motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import ProjectModal from "./ProjectModal";
import { GithubIcon } from "./BrandIcons";

const statusStyles: Record<string, string> = {
    "En cours": "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    "Réalisé": "text-green-400 border-green-400/30 bg-green-400/10",
};

const ProjectCard = ({
    project,
    index,
    onOpen,
}: {
    project: Project;
    index: number;
    onOpen: (p: Project) => void;
}) => (
    <TiltCard className="group" intensity={10}>
        <motion.div
            className="card h-full flex flex-col cursor-default"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
        >
            <div className="flex justify-between items-start mb-4">
                <span
                    className={`text-xs font-mono px-2 py-0.5 rounded border ${
                        statusStyles[project.status] ?? ""
                    }`}
                >
                    {project.status}
                </span>
                <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-mono text-accent border border-accent/30 bg-accent/10 px-2.5 py-1 rounded-full"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(77,144,214,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            title="Voir le code"
                        >
                            <GithubIcon size={12} /> Code
                        </motion.a>
                    )}
                    {project.live && project.live !== "#" && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-mono text-green-400 border border-green-400/30 bg-green-400/10 px-2.5 py-1 rounded-full"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(74,222,128,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            title="Voir le site"
                        >
                            <ExternalLink size={11} /> Live
                        </motion.a>
                    )}
                </div>
            </div>

            <div className="relative rounded-xl overflow-hidden mb-4 -mx-1">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <h3
                className="text-white font-bold text-lg mb-2"
                style={{ transform: "translateZ(20px)" }}
            >
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
            </p>

            <ul className="space-y-1 mb-5">
                {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-500 text-xs flex gap-2">
                        <span className="text-accent flex-shrink-0">▸</span>
                        {highlight}
                    </li>
                ))}
            </ul>

            <motion.button
                onClick={() => onOpen(project)}
                className="w-full flex items-center justify-center gap-2 text-xs font-mono text-accent border border-accent/30 bg-accent/5 rounded-lg py-2 mb-3 hover:bg-accent/15 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
            >
                <Eye size={12} /> Voir les détails
            </motion.button>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                    <motion.span
                        key={tag}
                        className="tag text-xs"
                        whileHover={{ scale: 1.1, borderColor: "#4d90d6" }}
                    >
                        {tag}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    </TiltCard>
);

const Projects = () => {
    const [filter, setFilter] = useState("Tous");
    const [selected, setSelected] = useState<Project | null>(null);

    const visible =
        filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

    return (
        <section id="projets" className="relative z-10 py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading title="Projets" />

                <motion.div
                    className="flex flex-wrap gap-2 mb-10"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {projectCategories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`font-mono text-sm px-5 py-2 rounded-lg border transition-colors duration-200 relative ${
                                filter === cat
                                    ? "border-accent text-accent"
                                    : "border-accent-glow/30 text-gray-500 hover:text-gray-300"
                            }`}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            {filter === cat && (
                                <motion.div
                                    layoutId="filter-bg"
                                    className="absolute inset-0 bg-accent/10 rounded-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project, i) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={i}
                                onOpen={setSelected}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selected && (
                    <ProjectModal project={selected} onClose={() => setSelected(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
