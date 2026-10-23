import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories, skillLevels, skills, type Skill } from "../data/portfolio";
import { fadeUp, viewportOnce } from "../lib/motion";
import SectionHeading from "./SectionHeading";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.7, y: -20 }}
        transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
        className="group relative"
        style={{ perspective: "800px" }}
    >
        <motion.div
            className="relative bg-secondary border border-accent-glow/25 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default overflow-hidden h-full"
            whileHover={{
                rotateY: 8,
                rotateX: -6,
                scale: 1.06,
                borderColor: skill.color,
                boxShadow: `0 20px 60px ${skill.color}30, 0 0 0 1px ${skill.color}40`,
            }}
            style={{ transformStyle: "preserve-3d" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, ${skill.color}12 0%, transparent 70%)`,
                }}
            />

            <div style={{ transform: "translateZ(20px)" }}>
                <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    style={{
                        filter: `drop-shadow(0 0 6px ${skill.color}50)`,
                    }}
                />
            </div>

            <span
                className="text-gray-300 text-sm font-medium text-center leading-tight"
                style={{ transform: "translateZ(10px)" }}
            >
                {skill.name}
            </span>

            <div className="flex gap-1" style={{ transform: "translateZ(10px)" }}>
                {[1, 2, 3, 4, 5].map((dot) => (
                    <motion.div
                        key={dot}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: dot <= skill.level ? skill.color : `${skill.color}25` }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.04 + dot * 0.05 }}
                    />
                ))}
            </div>

            <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary border border-accent-glow/50 rounded-lg px-2 py-1 text-xs font-mono text-accent whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-20"
                transition={{ duration: 0.15 }}
            >
                {skillLevels[skill.level]}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent-glow/50" />
            </motion.div>
        </motion.div>
    </motion.div>
);

const Skills = () => {
    const [filter, setFilter] = useState("Tous");
    const visible =
        filter === "Tous" ? skills : skills.filter((s) => s.category === filter);

    return (
        <section
            id="competences"
            className="relative z-10 py-12 md:py-24 px-4 md:px-6 bg-secondary/20"
        >
            <div className="max-w-5xl mx-auto">
                <SectionHeading title="Compétences" />

                <motion.div
                    className="flex flex-wrap gap-2 mb-10"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {skillCategories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`font-mono text-xs px-4 py-2 rounded-lg border transition-colors duration-200 relative ${
                                filter === cat
                                    ? "border-accent text-accent"
                                    : "border-accent-glow/30 text-gray-500 hover:text-gray-300"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter === cat && (
                                <motion.div
                                    layoutId="skill-filter-bg"
                                    className="absolute inset-0 bg-accent/10 rounded-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {visible.map((skill, i) => (
                            <SkillCard key={skill.id} skill={skill} index={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="flex flex-wrap items-center gap-3 md:gap-6 mt-10 justify-center text-xs text-gray-500 font-mono"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    {["Débutant", "Élémentaire", "Intermédiaire", "Avancé", "Expert"].map(
                        (label, i) => (
                            <span key={label} className="flex items-center gap-1.5">
                                <span className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((dot) => (
                                        <span
                                            key={dot}
                                            className={`inline-block w-1.5 h-1.5 rounded-full ${
                                                dot <= i + 1 ? "bg-accent" : "bg-accent/15"
                                            }`}
                                        />
                                    ))}
                                </span>
                                {label}
                            </span>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
