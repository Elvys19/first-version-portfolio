import { Mail } from "lucide-react";
import img from "../assets/Elvys.jpeg";


const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-10" id="Home">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, <br></br> je suis {""}
                    <span className="text-accent">ElvysDev</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur passionné spécialisé dans la création de solutions web innovantes. Avec une expertise en développement frontend et backend, je m'efforce de transformer des idées en applications fonctionnelles et esthétiques. Mon objectif est de créer des expériences utilisateur exceptionnelles tout en utilisant les dernières technologies pour garantir des performances optimales. Contactez moi en cliquant sur le bouton ci-dessous pour discuter de vos projets ou simplement pour échanger des idées sur le développement web.
                </p>
                <a href="#" className="btn btn-accent md:w-fit">
                    <Mail className="w-5 h-5" /> Contactez-moi

                </a>
            </div>
            <div className="flex-1 flex justify-center md:justify-end md:pr-10">
                <img
                    src={img}
                    alt="ElvysPhoto"
                    /* 
                       w-[70%] : occupe 70% de la largeur sur mobile
                       md:w-[40vw] : occupe 40% de la largeur totale de l'écran sur PC
                       max-w-[550px] : empêche l'image de devenir trop immense sur les très grands écrans
                    */
                    className="w-[70%] h-auto md:w-[35vw] max-w-[500px] object-cover border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </div>

        </div>
    );
};

export default Home;