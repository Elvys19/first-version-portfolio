import { useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
    MapPin,
    Phone,
    MessageCircle,
    FileText,
    Mail,
} from "lucide-react";
import { contact, profile } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import { fadeUp, letterReveal, stagger } from "../lib/motion";
import img from "../assets/Elvys.jpeg";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const GreetingBlob = ({
    cx,
    cy,
    size,
    delay,
    color,
}: {
    cx: number;
    cy: number;
    size: number;
    delay: number;
    color: string;
}) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            left: `${cx}%`,
            top: `${cy}%`,
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: "blur(60px)",
        }}
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 + delay * 2, delay, ease: "easeInOut" }}
    />
);

const createParticles = (count: number) => {
    // Générateur pseudo-aléatoire déterministe (LCG) : évite l'aléatoire impur au render
    let seed = 42;
    const rand = () => {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
    };

    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: rand() * 100,
        y: rand() * 100,
        size: rand() * 1.5 + 1,
        duration: rand() * 12 + 10,
        delay: rand() * 10,
    }));
};

const Particles = () => {
    const dots = useMemo(() => createParticles(12), []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dots.map((dot) => (
                <motion.div
                    key={dot.id}
                    className="absolute rounded-full bg-accent/25"
                    style={{
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                        width: dot.size,
                        height: dot.size,
                    }}
                    animate={{ y: [0, -40, 0], opacity: [0, 0.5, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: dot.duration,
                        delay: dot.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

const Hero = () => {
    const typed = useTypewriter(profile.roles, 75, 2200);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const imageX = useSpring(mouseX, { stiffness: 60, damping: 15 });
    const imageY = useSpring(mouseY, { stiffness: 60, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
    };

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    const socials = [
        { href: contact.github, Icon: GithubIcon, label: "GitHub" },
        { href: `mailto:${contact.email}`, Icon: Mail, label: "Email" },
        { href: contact.whatsapp, Icon: MessageCircle, label: "WhatsApp" },
        { href: contact.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    ];

    const stats = [
        { value: "10+", label: "Projets" },
        { value: "100%", label: "Qualité" },
        { value: "48h", label: "Réponse" },
    ];

    const infos = [
        { Icon: MapPin, text: contact.location },
        { Icon: Phone, text: contact.phone },
        { Icon: Mail, text: contact.email },
    ];

    return (
        <section
            id="accueil"
            className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 pt-20 pb-10 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <GreetingBlob cx={8} cy={25} size={380} delay={0} color="rgba(77,144,214,0.2)" />
            <GreetingBlob cx={72} cy={55} size={320} delay={4} color="rgba(30,77,128,0.25)" />
            <Particles />

            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                {[25, 50, 75].map((v) => (
                    <div
                        key={`v${v}`}
                        className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-accent-glow/10 to-transparent"
                        style={{ left: `${v}%` }}
                    />
                ))}
                {[33, 66].map((v) => (
                    <div
                        key={`h${v}`}
                        className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-glow/10 to-transparent"
                        style={{ top: `${v}%` }}
                    />
                ))}
            </motion.div>

            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative">
                <motion.div variants={stagger} initial="hidden" animate="visible">
                    <motion.div
                        variants={fadeUp}
                        className="flex items-center gap-3 mb-5 md:mb-8"
                    >
                        <span className="glow-dot" />
                        <span className="font-mono text-accent text-xs tracking-widest uppercase">
                            Portfolio © 2026
                        </span>
                        {profile.available && (
                            <motion.span
                                className="font-mono text-xs text-green-400 border border-green-400/30 bg-green-400/10 px-2 py-0.5 rounded-full"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2.5 }}
                            >
                                Disponible
                            </motion.span>
                        )}
                    </motion.div>

                    <div className="mb-3 overflow-hidden" style={{ perspective: "600px" }}>
                        <motion.div
                            className="flex text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none tracking-tight"
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                            initial="hidden"
                            animate="visible"
                        >
                            {profile.firstName.split("").map((char, i) => (
                                <motion.span
                                    key={`${char}-${i}`}
                                    variants={letterReveal}
                                    className="relative inline-block"
                                    whileHover={{
                                        color: "#4d90d6",
                                        textShadow: "0 0 20px rgba(77,144,214,0.8)",
                                        transition: { duration: 0.1 },
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-400 leading-tight mb-4 md:mb-6"
                    >
                        {profile.fullName}
                    </motion.h2>

                    <motion.div
                        variants={fadeUp}
                        className="flex items-center gap-3 mb-5 md:mb-8 h-7 md:h-8"
                    >
                        <motion.span
                            className="h-px bg-accent flex-shrink-0"
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        />
                        <span className="text-accent-light font-mono text-base md:text-lg tracking-wide">
                            {typed}
                            <motion.span
                                className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 md:mb-8 max-w-lg"
                    >
                        Je transforme vos idées en{" "}
                        <span className="text-accent-light font-medium">
                            applications web robustes
                        </span>
                        . Frontend React, backend Node.js et TypeScript pour des
                        projets d'envergure. Livraison propre, architecture solide.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex gap-4 md:gap-6 mb-5 md:mb-8 border-y border-accent-glow/20 py-3 md:py-4"
                    >
                        {stats.map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-lg md:text-xl font-black text-accent">
                                    {value}
                                </div>
                                <div className="text-xs text-gray-500 font-mono">{label}</div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col gap-1.5 mb-5 md:mb-8 text-xs md:text-sm text-gray-500"
                    >
                        {infos.map(({ Icon, text }) => (
                            <motion.span
                                key={text}
                                className="flex items-center gap-2"
                                whileHover={{ color: "#64b3f4", x: 6 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Icon className="text-accent flex-shrink-0" size={12} />
                                {text}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap gap-2 md:gap-3 mb-5 md:mb-8 w-full"
                    >
                        <motion.button
                            onClick={() => scrollTo("projets")}
                            className="btn-primary flex items-center gap-2 text-sm"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(77,144,214,0.5)" }}
                            whileTap={{ scale: 0.96 }}
                        >
                            Mes réalisations
                        </motion.button>
                        <motion.button
                            onClick={() => scrollTo("contact")}
                            className="btn-outline flex items-center gap-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            Démarrer un projet
                        </motion.button>
                        <motion.a
                            href="/cv-elvysdev.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline flex items-center gap-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <FileText size={13} /> CV
                        </motion.a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap gap-4 md:gap-5"
                    >
                        {socials.map(({ href, Icon, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-gray-500"
                                whileHover={{ color: "#4d90d6", y: -3 }}
                                transition={{ duration: 0.2 }}
                                title={label}
                            >
                                <Icon size={20} />
                                <span className="font-mono text-xs hidden sm:inline">
                                    {label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hidden md:flex justify-center items-center"
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="relative" style={{ x: imageX, y: imageY }}>
                        <motion.div
                            className="absolute inset-0 rounded-3xl"
                            style={{
                                background:
                                    "radial-gradient(circle at 40% 40%, rgba(77,144,214,0.3) 0%, transparent 65%)",
                            }}
                            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="relative w-72 h-80 lg:w-80 lg:h-96"
                            whileHover={{ filter: "drop-shadow(0 0 30px rgba(77,144,214,0.5))" }}
                        >
                            <img
                                src={img}
                                alt={profile.fullName}
                                className="w-full h-full object-cover object-top"
                                style={{ mixBlendMode: "screen" }}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-6 -left-6 bg-secondary/90 backdrop-blur-sm border border-accent-glow/50 rounded-2xl px-4 py-2.5 shadow-lg"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.05, borderColor: "#4d90d6" }}
                        >
                            <p className="font-mono text-xs text-accent font-bold">
                                Freelance — Disponible
                            </p>
                            <p className="text-gray-500 text-xs mt-0.5">
                                Web App — API — Dashboard
                            </p>
                        </motion.div>

                        {profile.available && (
                            <motion.div
                                className="absolute -top-4 -right-4 bg-secondary/90 backdrop-blur-sm border border-green-400/30 rounded-xl px-3 py-1.5 shadow-lg"
                                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="font-mono text-xs text-green-400 flex items-center gap-1.5">
                                    <motion.span
                                        className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    />
                                    Open to work
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
