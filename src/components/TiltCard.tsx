import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
};

const TiltCard = ({ children, className = "", intensity = 15 }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const spring = { stiffness: 200, damping: 20, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), spring);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), spring);
    const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
    const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);
    const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(77,144,214,0.15) 0%, transparent 60%)`;

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onMouseEnter={() => setHovered(true)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
            className={`relative ${className}`}
        >
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: glow }}
            />
            <div className="relative">{children}</div>
            {hovered && null}
        </motion.div>
    );
};

export default TiltCard;
