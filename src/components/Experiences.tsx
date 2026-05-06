import Title from './title';
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";
import caisse from "../assets/companies/Caisse mutuelle.webp";




const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Nodejs", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Nextjs", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA }
    ,
];

const experiences = [
    {
        id: 1,
        role: "Software Engineer",
        company: "Google",
        period: "Sep 2022 - Présent",
        description: [
            "Développement de nouvelles fonctionnalités pour Google Maps.",
            "Optimisation des performances de l'application.",
        ],
        image: google,
    },
    {
        id: 2,
        role: "Fullstack Developer",
        company: "Meta",
        period: "Jan 2021 - Août 2022",
        description: [
            "Création d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une architecture scalable et optimisée.",
        ],
        image: meta,
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "Amazon",
        period: "Mai 2019 - Déc 2020",
        description: [
            "Développement d'une interface utilisateur pour Amazon Web Services.",
            "Implémentation des tests unitaires et E2E.",
        ],
        image: amazon,
    },
    {
        id: 4,
        role: "ingenieur réseau",
        company: "Caisse Mutuelle B-F",
        period: "1er Sep 2025 - 1er Octobre 2025",
        description: [
            "Maintenance des équipements réseau et des serveurs de l'entreprise.",
            "Assistance aux utilisateurs pour les problèmes liés au réseau et aux systèmes.",
        ],
        image: caisse,
    },
];

const Experiences = () => {
    return (
        <div className="p-5 md:px-[15%]" id="Experiences">
            <Title title="Mes expériences" />
            <div className="flex flex-col-reverse  md:flex-row items-center justify-center">
                <div className="flex flex-wrap justify-center gap-4 items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center flex-col ">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name} className="w-full h-full object-cover rounded-full " />
                            </div>

                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl  shadow-lg">
                            <div className=" flex items-center">
                                <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10 " />
                                <div className="ml-4 ">
                                    <h1 className="text-xl text-accent font-bold">
                                        {experience.role} , {experience.company}

                                    </h1>
                                    <span className="text-sm">{experience.period}</span>

                                </div>


                            </div>
                            <ul className="list-disc ml-16 mt-2 ">
                                {experience.description.map((desc, index) => (
                                    <li key={index} className="">
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experiences;