import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

type SectionHeadingProps = {
    title: string;
    subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
    <motion.div
        className="mb-8 md:mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
    >
        <h2 className="section-title">{title}</h2>
        <motion.div
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {subtitle && (
            <p className="text-gray-500 text-sm font-mono mt-4">{subtitle}</p>
        )}
    </motion.div>
);

export default SectionHeading;
