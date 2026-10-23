import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Check } from "lucide-react";
import type { Project } from "../data/portfolio";
import { GithubIcon } from "./BrandIcons";

const statusStyles: Record<string, string> = {
    "En cours": "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    "Réalisé": "text-green-400 border-green-400/30 bg-green-400/10",
};

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    if (!project) return null;

    const { title, status, category, description, tags, github, live, details } = project;

    return createPortal(
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />

                <motion.div
                    className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-secondary border border-accent-glow/40 rounded-2xl shadow-2xl"
                    style={{ boxShadow: "0 0 80px rgba(77,144,214,0.2)" }}
                    initial={{ opacity: 0, scale: 0.88, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                >
                    <div className="sticky top-0 z-20 bg-secondary border-b border-accent-glow/20 px-6 py-4 flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span
                                    className={`text-xs font-mono px-2 py-0.5 rounded border ${
                                        statusStyles[status] ?? ""
                                    }`}
                                >
                                    {status}
                                </span>
                                <span className="text-xs text-gray-500 font-mono">{category}</span>
                            </div>
                            <h2 className="text-white font-bold text-xl md:text-2xl leading-tight">
                                {title}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 flex-shrink-0 mt-1"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <div className="px-6 py-6 space-y-8">
                        <div>
                            <p className="text-gray-300 leading-relaxed">
                                {details.longDescription || description}
                            </p>
                        </div>

                        {details.features.length > 0 && (
                            <div>
                                <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-4">
                                    Fonctionnalités
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {details.features.map((feature) => (
                                        <div
                                            key={feature.title}
                                            className="bg-primary/50 rounded-xl p-4 border border-accent-glow/15"
                                        >
                                            <p className="text-gray-200 font-semibold text-sm mb-3">
                                                {feature.title}
                                            </p>
                                            <ul className="space-y-2">
                                                {feature.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-2 text-gray-400 text-sm"
                                                    >
                                                        <Check
                                                            size={12}
                                                            className="text-accent flex-shrink-0 mt-0.5"
                                                        />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {details.techStack.length > 0 && (
                            <div>
                                <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-4">
                                    Stack technique
                                </h3>
                                <div className="space-y-3">
                                    {details.techStack.map((stack) => (
                                        <div
                                            key={stack.category}
                                            className="flex gap-3 items-start flex-wrap"
                                        >
                                            <span className="text-gray-500 text-xs font-mono w-24 flex-shrink-0 pt-0.5">
                                                {stack.category}
                                            </span>
                                            <div className="flex flex-wrap gap-2 flex-1">
                                                {stack.items.map((item) => (
                                                    <span key={item} className="tag text-xs">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {details.businessValue.length > 0 && (
                            <div>
                                <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-4">
                                    Valeur métier
                                </h3>
                                <ul className="space-y-2">
                                    {details.businessValue.map((value) => (
                                        <li key={value} className="flex gap-2 text-gray-400 text-sm">
                                            <span className="text-accent flex-shrink-0">▸</span>
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div>
                            <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span key={tag} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2 border-t border-accent-glow/15">
                            {github && github !== "#" && (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline flex items-center gap-2 text-sm"
                                >
                                    <GithubIcon size={14} /> Code source
                                </a>
                            )}
                            {live && live !== "#" && (
                                <a
                                    href={live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary flex items-center gap-2 text-sm"
                                >
                                    <ExternalLink size={13} /> Voir le site
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

export default ProjectModal;
