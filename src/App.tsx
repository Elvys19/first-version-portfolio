import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-primary text-gray-300 overflow-x-hidden">
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
            <Footer />
        </div>
    );
}
