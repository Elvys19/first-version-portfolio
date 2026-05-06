import { Container } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4 ">
            {/* Logo Section */}
            <a href="#" className="flex items-center font-bold text-2xl md:text-xl">
                <Container className="mr-2 text-accent" />
                <span>
                    Elvys<span className="text-accent">DEV</span>
                </span>
            </a>

            {/* Menu Section */}
            <ul className="flex items-center space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost">
                        A propos
                    </a>
                </li>
                <li>
                    <a href="#Experiences" className="btn btn-sm btn-ghost">
                        Mes experiences
                    </a>
                </li>
                <li>
                    <a href="#Projects" className="btn btn-sm btn-accent">
                        Mes projets
                    </a>
                </li>
            </ul>


        </div>
    );
};

export default Navbar;