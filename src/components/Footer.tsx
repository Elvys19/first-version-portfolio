import { profile } from "../data/portfolio";

const Footer = () => (
    <footer className="relative z-10 bg-secondary/30 border-t border-accent-glow/30 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-gray-500">
                © {new Date().getFullYear()} — {profile.fullName}
            </p>
            <p className="font-mono text-xs text-gray-600">
                Développeur Web Full Stack — {profile.interests.slice(0, 2).join(" · ")}
            </p>
        </div>
    </footer>
);

export default Footer;
