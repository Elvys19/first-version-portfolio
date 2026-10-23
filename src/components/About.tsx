import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "../lib/motion";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import img from "../assets/Elvys.jpeg";

const About = () => {
    const stats = [
        { label: "Projets livrés", value: 10, suffix: "+" },
        { label: "Technologies maîtrisées", value: 20, suffix: "+" },
        { label: "Clients satisfaits", value: 4, suffix: "+" },
    ];

    return (
        <section id="apropos" className="relative z-10 py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <SectionHeading title="Ce que j'apporte" />

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    <motion.div
                        className="md:col-span-2 flex justify-center md:justify-start"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <div className="relative">
                            <motion.div
                                className="w-52 h-52 md:w-64 md:h-64"
                                whileHover={{ filter: "drop-shadow(0 0 25px rgba(77,144,214,0.5))" }}
                            >
                                <img
                                    src={img}
                                    alt={profile.fullName}
                                    className="w-full h-full object-cover object-top"
                                    style={{ mixBlendMode: "screen" }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:col-span-3 space-y-6"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.p variants={fadeUp} className="text-gray-300 text-lg leading-relaxed">
                            {profile.bio}
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
                            {profile.bio2}
                        </motion.p>

                        <motion.div className="grid grid-cols-3 gap-4 pt-4" variants={stagger}>
                            {stats.map(({ label, value, suffix }) => (
                                <motion.div
                                    key={label}
                                    variants={fadeUp}
                                    className="text-center p-4 rounded-lg bg-secondary/50 border border-accent-glow/30"
                                    whileHover={{
                                        borderColor: "#4d90d6",
                                        y: -4,
                                        boxShadow: "0 10px 30px rgba(77,144,214,0.15)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="text-2xl font-black text-accent mb-1">
                                        <Counter target={value} suffix={suffix} />
                                    </div>
                                    <div className="text-xs text-gray-500 leading-tight">
                                        {label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div className="pt-2" variants={fadeUp}>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                                Langues
                            </p>
                            <div className="flex gap-6">
                                {profile.languages.map((lang, i) => (
                                    <motion.div
                                        key={lang.name}
                                        className="flex gap-6 items-start"
                                        variants={fadeUp}
                                        custom={i}
                                    >
                                        {i > 0 && (
                                            <div className="w-px bg-accent-glow/30 self-stretch" />
                                        )}
                                        <div>
                                            <div className="text-sm text-gray-300 font-semibold mb-1">
                                                {lang.name}
                                            </div>
                                            <div className="text-xs text-gray-500">{lang.level}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">
                                Centres d'intérêt
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {profile.interests.map((interest, i) => (
                                    <motion.span
                                        key={interest}
                                        className="tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={viewportOnce}
                                        transition={{ delay: i * 0.06, duration: 0.3 }}
                                        whileHover={{ scale: 1.08, borderColor: "#4d90d6" }}
                                    >
                                        {interest}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
