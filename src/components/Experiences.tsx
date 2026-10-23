import { motion } from "framer-motion";
import { experiences, education, type Experience } from "../data/portfolio";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import SectionHeading from "./SectionHeading";

type TimelineItemProps = {
    period: string;
    title: string;
    subtitle: string;
    location: string;
    items?: string[];
    image?: string;
    index: number;
};

const TimelineItem = ({
    period,
    title,
    subtitle,
    location,
    items,
    image,
    index,
}: TimelineItemProps) => (
    <motion.div
        className="relative pl-8"
        variants={{
            hidden: { opacity: 0, x: -30 },
            visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 },
            },
        }}
    >
        <motion.div
            className="absolute left-[7px] top-6 bottom-0 w-px bg-gradient-to-b from-accent-glow/50 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        />
        <motion.div
            className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-primary"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.3, delay: index * 0.1, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.5, boxShadow: "0 0 10px rgba(77,144,214,0.8)" }}
        />

        <div className="mb-8 group">
            <div className="flex items-center gap-3 mb-2">
                {image && (
                    <img
                        src={image}
                        alt={subtitle}
                        className="w-8 h-8 rounded object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                )}
                <span className="font-mono text-xs text-accent tracking-wide">{period}</span>
            </div>
            <h4 className="text-white font-semibold mt-1 mb-0.5 group-hover:text-accent-light transition-colors">
                {title}
            </h4>
            <p className="text-accent-light text-sm mb-0.5">{subtitle}</p>
            <p className="text-gray-500 text-xs mb-3">{location}</p>
            {items && items.length > 0 && (
                <ul className="space-y-1">
                    {items.map((item, i) => (
                        <motion.li
                            key={item}
                            className="text-gray-400 text-sm flex gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewportOnce}
                            transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                        >
                            <span className="text-accent flex-shrink-0 mt-0.5">▸</span>
                            {item}
                        </motion.li>
                    ))}
                </ul>
            )}
        </div>
    </motion.div>
);

const Experiences = () => (
    <section id="experiences" className="relative z-10 py-12 md:py-24 px-4 md:px-6 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
            <SectionHeading title="Parcours" />

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <motion.h3
                        className="text-lg font-bold text-gray-200 mb-8 flex items-center gap-3"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span
                            className="h-px bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: 24 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.5 }}
                        />
                        Expériences
                    </motion.h3>
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {experiences.map((exp: Experience) => (
                            <TimelineItem
                                key={exp.id}
                                period={exp.period}
                                title={exp.title}
                                subtitle={exp.company}
                                location={exp.location}
                                items={exp.items}
                                image={exp.image}
                                index={exp.id - 1}
                            />
                        ))}
                    </motion.div>
                </div>

                <div>
                    <motion.h3
                        className="text-lg font-bold text-gray-200 mb-8 flex items-center gap-3"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span
                            className="h-px bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: 24 }}
                            viewport={viewportOnce}
                            transition={{ duration: 0.5 }}
                        />
                        Formation
                    </motion.h3>
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        {education.map((edu) => (
                            <TimelineItem
                                key={edu.id}
                                period={edu.period}
                                title={edu.title}
                                subtitle={edu.school}
                                location={edu.location}
                                index={edu.id - 1}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

export default Experiences;
