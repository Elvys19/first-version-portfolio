import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { certificates } from "../data/portfolio";
import { fadeUp, viewportOnce } from "../lib/motion";
import SectionHeading from "./SectionHeading";

type Certificate = {
    id: number;
    name: string;
    issuer: string;
    date: string;
    description: string;
    link: string;
    color: string;
};

const CertificateCard = ({ cert, index }: { cert: Certificate; index: number }) => (
    <motion.div
        variants={fadeUp}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ delay: index * 0.08 }}
        className="card group relative overflow-hidden flex flex-col gap-4"
        whileHover={{ y: -4, boxShadow: `0 20px 60px ${cert.color}22` }}
    >
        <motion.div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
        />

        <div className="flex items-start justify-between gap-3">
            <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}40` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
                <Award size={22} style={{ color: cert.color }} />
            </motion.div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full flex-shrink-0">
                <Calendar size={10} />
                {cert.date}
            </div>
        </div>

        <div className="flex-1">
            <h3 className="text-white font-bold text-base leading-snug mb-1.5 group-hover:text-accent-light transition-colors">
                {cert.name}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-accent font-mono mb-3">
                {cert.issuer}
            </div>
            {cert.description && (
                <p className="text-gray-500 text-xs leading-relaxed">{cert.description}</p>
            )}
        </div>

        {cert.link && cert.link !== "#" && (
            <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-accent border border-accent/30 bg-accent/5 rounded-lg px-3 py-2 w-full justify-center hover:bg-accent/15 transition-colors mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
            >
                <ExternalLink size={10} /> Voir le certificat
            </motion.a>
        )}
    </motion.div>
);

const Certificates = () => {
    if (certificates.length === 0) return null;

    return (
        <section id="certificats" className="relative z-10 py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Certificats"
                    subtitle="Formations certifiées — Apprentissage continu"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, i) => (
                        <CertificateCard key={cert.id} cert={cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
