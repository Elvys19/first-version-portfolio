import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MessageCircle,
    MapPin,
    Send,
    Check,
} from "lucide-react";
import { contact } from "../data/portfolio";
import { fadeUp, slideLeft, slideRight, stagger, viewportOnce } from "../lib/motion";
import TiltCard from "./TiltCard";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

type FormState = "idle" | "sending" | "sent" | "error";

const Contact = () => {
    const [state, setState] = useState<FormState>("idle");
    const formRef = useRef<HTMLFormElement>(null);

    const coords = [
        { Icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
        {
            Icon: Phone,
            label: "Téléphone",
            value: contact.phone,
            href: `tel:${contact.phone.replace(/\s/g, "")}`,
        },
        { Icon: MessageCircle, label: "WhatsApp", value: contact.phone, href: contact.whatsapp },
        { Icon: MapPin, label: "Localisation", value: contact.location, href: null },
        { Icon: GithubIcon, label: "GitHub", value: "Elvys19", href: contact.github },
        { Icon: LinkedinIcon, label: "LinkedIn", value: "Elvys Sanou", href: contact.linkedin },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setState("sending");

        const data = new FormData(e.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        const message = data.get("message");

        const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
        const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
            `Nouveau message de ${name}`
        )}&body=${body}`;

        window.location.href = mailto;

        setTimeout(() => {
            setState("sent");
            formRef.current?.reset();
            setTimeout(() => setState("idle"), 5000);
        }, 800);
    };

    return (
        <section id="contact" className="relative z-10 py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="mb-8 md:mb-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <h2 className="section-title">Travaillons ensemble</h2>
                    <motion.div
                        className="section-line"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.7 }}
                    />
                    <motion.p
                        className="text-gray-400 max-w-xl mt-4"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        Vous avez un projet en tête ? Décrivez-le moi. Je vous réponds
                        sous 48h avec une proposition claire et un devis honnête.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        className="space-y-6"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.h3
                            className="text-gray-200 font-semibold text-lg mb-6 flex items-center gap-3"
                            variants={fadeUp}
                        >
                            <motion.span
                                className="h-px bg-accent"
                                initial={{ width: 0 }}
                                whileInView={{ width: 24 }}
                                viewport={viewportOnce}
                                transition={{ duration: 0.5 }}
                            />
                            Coordonnées
                        </motion.h3>

                        <motion.div
                            className="space-y-4"
                            variants={stagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                        >
                            {coords.map(({ Icon, label, value, href }) => (
                                <motion.div
                                    key={label}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { delay: 0.05 },
                                        },
                                    }}
                                    className="flex items-center gap-4 group"
                                >
                                    <motion.div
                                        className="w-10 h-10 rounded-lg bg-accent/10 border border-accent-glow/30 flex items-center justify-center flex-shrink-0"
                                        whileHover={{
                                            borderColor: "#4d90d6",
                                            scale: 1.1,
                                            boxShadow: "0 0 15px rgba(77,144,214,0.3)",
                                        }}
                                    >
                                        <Icon size={16} className="text-accent" />
                                    </motion.div>
                                    <div>
                                        <p className="text-gray-500 text-xs">{label}</p>
                                        {href ? (
                                            <motion.a
                                                href={href}
                                                target={href.startsWith("http") ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="text-gray-200 text-sm"
                                                whileHover={{ color: "#64b3f4", x: 4 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {value}
                                            </motion.a>
                                        ) : (
                                            <p className="text-gray-200 text-sm">{value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-8 p-5 rounded-xl bg-secondary/50 border border-accent-glow/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewportOnce}
                            transition={{ delay: 0.4 }}
                            whileHover={{ borderColor: "rgba(77,144,214,0.4)" }}
                        >
                            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
                                Objectif professionnel
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {contact.objective}
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.h3
                            className="text-gray-200 font-semibold text-lg mb-6 flex items-center gap-3"
                            variants={fadeUp}
                        >
                            <motion.span
                                className="h-px bg-accent"
                                initial={{ width: 0 }}
                                whileInView={{ width: 24 }}
                                viewport={viewportOnce}
                                transition={{ duration: 0.5 }}
                            />
                            Parlez-moi de votre projet
                        </motion.h3>

                        <TiltCard intensity={5}>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="space-y-4 p-6 rounded-xl bg-secondary/40 border border-accent-glow/20"
                            >
                                {(["Nom", "Email"] as const).map((field, i) => (
                                    <motion.div
                                        key={field}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={viewportOnce}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <label className="block text-xs font-mono text-gray-500 mb-1.5 uppercase tracking-wide">
                                            {field}
                                        </label>
                                        <input
                                            type={field === "Email" ? "email" : "text"}
                                            name={field === "Email" ? "email" : "name"}
                                            required
                                            placeholder={
                                                field === "Email" ? "votre@email.com" : "Votre nom"
                                            }
                                            className="w-full px-4 py-3 bg-primary/60 border border-accent-glow/30 rounded-lg text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-accent transition-colors"
                                        />
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportOnce}
                                    transition={{ delay: 0.2 }}
                                >
                                    <label className="block text-xs font-mono text-gray-500 mb-1.5 uppercase tracking-wide">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={5}
                                        placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
                                        className="w-full px-4 py-3 bg-primary/60 border border-accent-glow/30 rounded-lg text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={state === "sending"}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                                    whileHover={{
                                        scale: state === "sending" ? 1 : 1.02,
                                        boxShadow: "0 0 25px rgba(77,144,214,0.4)",
                                    }}
                                    whileTap={{ scale: state === "sending" ? 1 : 0.97 }}
                                >
                                    {state === "sent" ? (
                                        <motion.span
                                            className="flex items-center gap-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <Check size={14} /> Message envoyé
                                        </motion.span>
                                    ) : state === "sending" ? (
                                        <motion.span
                                            className="flex items-center gap-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <motion.span
                                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                            />
                                            Envoi...
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            className="flex items-center gap-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <Send size={14} /> Envoyer
                                        </motion.span>
                                    )}
                                </motion.button>
                            </form>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
