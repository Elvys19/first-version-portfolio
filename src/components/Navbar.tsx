import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("#accueil");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks
            .map((l) => document.querySelector(l.href))
            .filter((el): el is Element => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const navigate = (href: string) => {
        setActive(href);
        setMobileOpen(false);
        setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 320);
    };

    return (
        <motion.header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-primary/95 backdrop-blur-md border-b border-accent-glow/50"
                    : "bg-transparent"
            }`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.a
                    href="#accueil"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("#accueil");
                    }}
                    className="cursor-pointer font-mono text-sm text-accent tracking-widest uppercase"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-accent-glow flex items-center justify-center bg-secondary">
                        <Code2 size={18} className="text-accent" />
                    </div>
                </motion.a>

                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                        >
                            <button
                                onClick={() => navigate(link.href)}
                                className={`font-mono text-sm tracking-wide transition-colors duration-200 relative py-1 ${
                                    active === link.href
                                        ? "text-accent"
                                        : "text-gray-400 hover:text-accent-light"
                                }`}
                            >
                                {link.label}
                                {active === link.href && (
                                    <motion.span
                                        layoutId="nav-active"
                                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </button>
                        </motion.li>
                    ))}
                </ul>

                <motion.button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-accent p-2"
                    aria-label="Menu"
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {mobileOpen ? (
                            <motion.span
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={20} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="open"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={20} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-accent-glow/30 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <ul className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <button
                                        onClick={() => navigate(link.href)}
                                        className={`font-mono text-sm w-full text-left py-2 px-3 rounded-lg transition-colors ${
                                            active === link.href
                                                ? "text-accent bg-accent/10"
                                                : "text-gray-400 hover:text-accent-light hover:bg-white/5"
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
