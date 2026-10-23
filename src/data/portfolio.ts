import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";
import imgGIT from "../assets/techno/git.svg";
import imgDJANGO from "../assets/techno/django.svg";
import imgJAVA from "../assets/techno/java.svg";
import imgDART from "../assets/techno/dart.svg";
import imgPOSTGRES from "../assets/techno/postgresql.svg";

import caisse from "../assets/companies/Caisse mutuelle.webp";

import proj1 from "../assets/projects/1.webp";
import proj2 from "../assets/projects/2.webp";
import proj3 from "../assets/projects/3.webp";
import proj4 from "../assets/projects/4.webp";
import proj5 from "../assets/projects/5.webp";
import proj6 from "../assets/projects/6.webp";

export const profile = {
    firstName: "Elvys",
    fullName: "Elvys Brulon Sanou — Développeur Web Full Stack",
    roles: [
        "Développeur Frontend React",
        "Développeur Backend Node.js",
        "Passionné d'UI/UX",
        "Créateur d'expériences web",
    ],
    available: true,
    bio: "Je suis un développeur frontend passionné par la création d'interfaces web modernes, accessibles et agréables à utiliser. J'accorde une attention particulière à la fluidité des animations, à la qualité du code et à la performance des applications que je livre.",
    bio2: "Côté backend, je conçois des API REST robustes avec Node.js et les outils moderne de l'écosystème JavaScript. J'aime travailler sur des projets de bout en bout, de la modélisation de la base de données jusqu'au déploiement, en veillant toujours à la maintenabilité du code.",
    languages: [
        { name: "Français", level: "Langue maternelle" },
        { name: "Anglais", level: "Technique" },
        { name: "Mandarin", level: "Notions" },
    ],
    interests: [
        "React & Next.js",
        "Node.js & APIs REST",
        "TypeScript",
        "Tailwind CSS",
        "UI/UX Design",
        "Motion Design",
        "Accessibilité web",
        "Clean Architecture",
    ],
};

export const contact = {
    email: "elvyssanou@gmail.com",
    phone: "+226 77 21 51 17",
    location: "Bobo-Dioulasso, Burkina Faso",
    github: "https://github.com/Elvys19",
    linkedin: "https://www.linkedin.com/in/elvys-sanou-729150375",
    whatsapp: "https://wa.me/22677215117",
    objective:
        "Développeur full stack passionné par les projets web sur mesure, les interfaces interactives et les architectures maintenables. Je recherche des collaborations sur des projets ambitieux, du cadrage à la mise en production.",
};

export type Skill = {
    id: number;
    name: string;
    category: string;
    image: string;
    color: string;
    level: number;
};

export const skillCategories = ["Tous", "Frontend", "Backend", "Outils"];

export const skills: Skill[] = [
    { id: 1, name: "HTML5", category: "Frontend", image: imgHTML, color: "#e34f26", level: 5 },
    { id: 2, name: "CSS3", category: "Frontend", image: imgCSS, color: "#1572b6", level: 5 },
    { id: 3, name: "JavaScript", category: "Frontend", image: imgJS, color: "#f7df1e", level: 5 },
    { id: 4, name: "React", category: "Frontend", image: imgREACT, color: "#61dafb", level: 5 },
    { id: 5, name: "Next.js", category: "Frontend", image: imgNEXT, color: "#ffffff", level: 4 },
    { id: 6, name: "Tailwind CSS", category: "Frontend", image: imgTAILWIND, color: "#38bdf8", level: 5 },
    { id: 7, name: "TypeScript", category: "Frontend", image: imgTYPE, color: "#3178c6", level: 4 },
    { id: 8, name: "Node.js", category: "Backend", image: imgNODE, color: "#5fa04e", level: 4 },
    { id: 9, name: "Prisma", category: "Backend", image: imgPRISMA, color: "#5a67d8", level: 4 },
    { id: 10, name: "PostgreSQL", category: "Backend", image: imgPOSTGRES, color: "#4169e1", level: 4 },
    { id: 11, name: "Django", category: "Backend", image: imgDJANGO, color: "#44b78b", level: 4 },
    { id: 12, name: "Java", category: "Backend", image: imgJAVA, color: "#f89820", level: 3 },
    { id: 13, name: "Dart", category: "Outils", image: imgDART, color: "#0175c2", level: 4 },
    { id: 14, name: "Git", category: "Outils", image: imgGIT, color: "#f05032", level: 4 },
];

export const skillLevels = ["", "Débutant", "Élémentaire", "Intermédiaire", "Avancé", "Expert"];

export type Experience = {
    id: number;
    period: string;
    title: string;
    company: string;
    location: string;
    image: string;
    items: string[];
};

export const experiences: Experience[] = [
    {
        id: 1,
        period: "Mars 2026 — Juin 2026",
        title: "Stagiaire",
        company: "SOFITEX",
        location: "Bobo-Dioulasso, Burkina Faso",
        image: "",
        items: [
            "Stage au sein de SOFITEX à Bobo-Dioulasso.",
            "Mise en pratique des compétences en systèmes d'information et en informatique.",
        ],
    },
    {
        id: 2,
        period: "Sept. 2025 — Oct. 2025",
        title: "Stagiaire",
        company: "Caisse Mutuelle Burkina Faso",
        location: "Bobo-Dioulasso, Hauts-Bassins, Burkina Faso",
        image: caisse,
        items: [
            "Maintenance des équipements informatiques et réseau de l'entreprise.",
            "Assistance aux utilisateurs pour les problèmes liés au réseau et aux systèmes.",
        ],
    },
];

export type Education = {
    id: number;
    period: string;
    title: string;
    school: string;
    location: string;
};

export const education: Education[] = [
    {
        id: 1,
        period: "Sept. 2022 — Présent",
        title: "Licence — Ingénierie des Systèmes d'Information",
        school: "École Supérieure d'Informatique",
        location: "Bobo-Dioulasso, Burkina Faso",
    },
    {
        id: 2,
        period: "Sept. 2021 — Juil. 2022",
        title: "Baccalauréat",
        school: "Collège de Tounouma Garçon",
        location: "Bobo-Dioulasso, Burkina Faso",
    },
    {
        id: 3,
        period: "Sept. 2018 — Juil. 2019",
        title: "BEPC",
        school: "Collège de Tounouma Garçon",
        location: "Bobo-Dioulasso, Burkina Faso",
    },
    {
        id: 4,
        period: "Sept. 2014 — Juil. 2015",
        title: "CEP",
        school: "Complexe scolaire Jean Paul II",
        location: "Bobo-Dioulasso, Burkina Faso",
    },
];

export const projectCategories = ["Tous", "Web", "Système"];

export type Project = {
    id: number;
    title: string;
    status: "En cours" | "Réalisé";
    category: string;
    description: string;
    tags: string[];
    highlights: string[];
    github: string;
    live: string;
    image: string;
    details: {
        longDescription: string;
        features: { title: string; items: string[] }[];
        techStack: { category: string; items: string[] }[];
        businessValue: string[];
    };
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Tuteur Intelligent",
        status: "Réalisé",
        category: "Web",
        description:
            "Plateforme éducative avec tuteur IA : parcours par niveau, exercices interactifs, gamification et espace d'administration.",
        tags: ["React", "Django", "Tailwind CSS"],
        highlights: [
            "Dashboard élève et espace admin",
            "Gamification : XP, badges et séries",
            "Gestion des niveaux, matières et exercices",
        ],
        github: "https://github.com/Elvys19/tuteur-intelligent",
        live: "#",
        image: proj1,
        details: {
            longDescription:
                "Une plateforme d'apprentissage complète pensée pour accompagner les élèves : un tuteur intelligent recommande des contenus, suit la progression et valorise la régularité. L'espace administrateur permet de gérer le curriculum, les cours et les exercices.",
            features: [
                {
                    title: "Apprentissage",
                    items: [
                        "Tableau de bord personnalisé par élève",
                        "Recommandations et suivi de progression",
                        "Exercices interactifs et badges de réussite",
                    ],
                },
                {
                    title: "Administration",
                    items: [
                        "CRUD sur les niveaux, matières et cours",
                        "Gestion des exercices et des utilisateurs",
                        "Rôles élève / administrateur avec JWT",
                    ],
                },
            ],
            techStack: [
                { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
                { category: "Backend", items: ["Python", "Django", "Django REST"] },
                { category: "Données", items: ["SQLite", "JWT"] },
            ],
            businessValue: [
                "Suivi individualisé des apprenants",
                "Administration du contenu sans intervention technique",
                "Expérience motivante grâce à la gamification",
            ],
        },
    },
    {
        id: 2,
        title: "Gestion de boutique",
        status: "Réalisé",
        category: "Système",
        description:
            "Application Java de gestion de boutique : produits, stock, ventes et rapports, adossée à une base PostgreSQL.",
        tags: ["Java", "Maven", "PostgreSQL"],
        highlights: [
            "Gestion du catalogue et du stock",
            "Suivi des ventes et des approvisionnements",
            "Base de données relationnelle et rapport technique",
        ],
        github: "https://github.com/Elvys19/gestion-boutique",
        live: "#",
        image: proj2,
        details: {
            longDescription:
                "Une application de gestion de boutique développée en Java 17 avec Maven. Elle s'appuie sur PostgreSQL pour centraliser les produits, le stock et les ventes, et fournit un rapport technique détaillant l'architecture et le modèle de données.",
            features: [
                {
                    title: "Gestion commerciale",
                    items: [
                        "Catalogue produits et gestion du stock",
                        "Enregistrement des ventes et des mouvements",
                        "Requêtes et rapports sur l'activité",
                    ],
                },
                {
                    title: "Technique",
                    items: [
                        "Architecture Java 17 packagée en JAR exécutable",
                        "Connexion PostgreSQL via JDBC",
                        "Script SQL complet de création de la base",
                    ],
                },
            ],
            techStack: [
                { category: "Application", items: ["Java 17", "Maven"] },
                { category: "Données", items: ["PostgreSQL", "SQL"] },
                { category: "Tests", items: ["JUnit"] },
            ],
            businessValue: [
                "Centralisation des données de la boutique",
                "Meilleure visibilité sur le stock et les ventes",
                "Base solide pour de futures évolutions",
            ],
        },
    },
    {
        id: 3,
        title: "Portfolio interactif",
        status: "Réalisé",
        category: "Web",
        description:
            "Site portfolio one-page avec animations au défilement, effets 3D, filtres projets et design sombre optimisé SEO.",
        tags: ["React", "TypeScript", "Framer Motion"],
        highlights: [
            "Animations au scroll et effets 3D",
            "Projets filtrables avec fiches détaillées",
            "Optimisation SEO et performances",
        ],
        github: "https://github.com/Elvys19/first-version-portfolio",
        live: "https://elvysbrulonsanou.vercel.app",
        image: proj3,
        details: {
            longDescription:
                "Un portfolio one-page construit pour mettre en avant le travail avec des animations sobres et un chargement rapide. L'architecture repose sur des composants réutilisables, un design system centralisé et des données typées.",
            features: [
                {
                    title: "Design",
                    items: [
                        "Design system Tailwind centralisé",
                        "Animations Framer Motion au défilement",
                        "Cartes 3D et navigation fluide",
                    ],
                },
                {
                    title: "Technique",
                    items: [
                        "Build Vite et découpage de code",
                        "Métadonnées Open Graph et JSON-LD",
                        "Images optimisées et accessibilité clavier",
                    ],
                },
            ],
            techStack: [
                { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
                { category: "Outils", items: ["Vite", "ESLint"] },
            ],
            businessValue: [
                "Présentation professionnelle du profil",
                "Positionnement sur les moteurs de recherche",
                "Maintenance simplifiée grâce aux tokens",
            ],
        },
    },
    {
        id: 4,
        title: "Task CLI",
        status: "Réalisé",
        category: "Système",
        description:
            "Gestionnaire de tâches en ligne de commande écrit en Dart pur, avec priorités, échéances et persistance JSON.",
        tags: ["Dart", "CLI", "JSON"],
        highlights: [
            "Mode interactif et mode commandes",
            "Tri par priorité, échéance ou création",
            "41 tests unitaires",
        ],
        github: "https://github.com/Elvys19/task-cli",
        live: "#",
        image: proj4,
        details: {
            longDescription:
                "Une application CLI complète écrite en Dart pur, sans Flutter. Elle illustre une architecture orientée objets avec classes abstraites, interfaces, génériques et exceptions personnalisées, tout en restant simple à utiliser au quotidien.",
            features: [
                {
                    title: "Fonctionnalités",
                    items: [
                        "Ajout, complétion et suppression de tâches",
                        "Priorités, dates limites et tâches urgentes",
                        "Tri et persistance dans un fichier JSON",
                    ],
                },
                {
                    title: "Qualité",
                    items: [
                        "Repository générique et service métier",
                        "Exceptions personnalisées et validation",
                        "41 tests unitaires avec package:test",
                    ],
                },
            ],
            techStack: [
                { category: "Application", items: ["Dart", "CLI"] },
                { category: "Stockage", items: ["JSON"] },
                { category: "Tests", items: ["package:test"] },
            ],
            businessValue: [
                "Organisation personnelle au quotidien",
                "Démonstration de bonnes pratiques Dart",
                "Base réutilisable pour d'autres outils CLI",
            ],
        },
    },
    {
        id: 5,
        title: "Gestion des employés",
        status: "Réalisé",
        category: "Web",
        description:
            "Application web Django pour gérer les employés, les projets et leurs affectations via l'administration intégrée.",
        tags: ["Python", "Django", "SQLite"],
        highlights: [
            "CRUD employés et projets",
            "Administration Django prête à l'emploi",
            "Modèle de données relationnel",
        ],
        github: "https://github.com/Elvys19/firstGit",
        live: "#",
        image: proj5,
        details: {
            longDescription:
                "Une application de gestion des ressources humaines bâtie avec Django. Elle modélise les employés, les projets et leurs relations, et s'appuie sur l'interface d'administration pour créer, modifier et suivre les données.",
            features: [
                {
                    title: "Gestion",
                    items: [
                        "Fiches employés et affectations aux projets",
                        "Suivi des projets et des équipes",
                        "Recherche et filtres dans l'administration",
                    ],
                },
                {
                    title: "Technique",
                    items: [
                        "Modèles Django et migrations",
                        "Interface d'administration personnalisée",
                        "Base SQLite prête à l'emploi",
                    ],
                },
            ],
            techStack: [
                { category: "Backend", items: ["Python", "Django"] },
                { category: "Frontend", items: ["HTML", "Templates Django"] },
                { category: "Données", items: ["SQLite"] },
            ],
            businessValue: [
                "Centralisation des informations RH",
                "Suivi simple des projets et affectations",
                "Prise en main rapide grâce à Django Admin",
            ],
        },
    },
    {
        id: 6,
        title: "TodoList React",
        status: "Réalisé",
        category: "Web",
        description:
            "Application de gestion de tâches en React et TypeScript : ajout, complétion et suppression avec une interface réactive.",
        tags: ["React", "TypeScript", "Vite"],
        highlights: [
            "Interface réactive et typée",
            "Build Vite rapide",
            "Composants réutilisables",
        ],
        github: "https://github.com/Elvys19/TodoListReactJs",
        live: "#",
        image: proj6,
        details: {
            longDescription:
                "Un projet React + TypeScript + Vite pour gérer une liste de tâches. Il met en pratique les hooks, le typage des props et la composition de composants dans une interface simple et efficace.",
            features: [
                {
                    title: "Fonctionnalités",
                    items: [
                        "Ajout et suppression de tâches",
                        "Marquage des tâches terminées",
                        "État local réactif avec hooks",
                    ],
                },
                {
                    title: "Technique",
                    items: [
                        "TypeScript strict sur les composants",
                        "Build et HMR avec Vite",
                        "Configuration ESLint",
                    ],
                },
            ],
            techStack: [
                { category: "Frontend", items: ["React", "TypeScript"] },
                { category: "Outils", items: ["Vite", "ESLint"] },
            ],
            businessValue: [
                "Organisation simple des tâches",
                "Base d'apprentissage React/TypeScript",
                "Code clair et facile à étendre",
            ],
        },
    },
];

export type Certificate = {
    id: number;
    name: string;
    issuer: string;
    date: string;
    description: string;
    link: string;
    file?: string;
    color: string;
};

export const certificates: Certificate[] = [
    {
        id: 1,
        name: "Promptly pour les débutants : Construire une application d'IA générative",
        issuer: "Coursera",
        date: "Oct. 2025",
        description:
            "Découverte de l'IA générative et construction d'une application concrète à partir de prompts.",
        link: "https://www.coursera.org/account/accomplishments/records/GMXFP04OWKFP",
        file: "/certificates/promptly.jpg",
        color: "#0056D2",
    },
    {
        id: 2,
        name: "ChatGPT Terrain de jeu pour les débutants : Introduction à l'IA NLP",
        issuer: "Coursera",
        date: "Sept. 2025",
        description:
            "Fondamentaux de l'intelligence artificielle et du prompt engineering appliqués à ChatGPT.",
        link: "https://www.coursera.org/account/accomplishments/records/WE1FRTHQED7G",
        file: "/certificates/chatgpt.jpg",
        color: "#10a37f",
    },
    {
        id: 3,
        name: "La narration cinématographique simplifiée : Maîtriser Lumen5 IA",
        issuer: "Coursera",
        date: "Sept. 2025",
        description:
            "Création de vidéos et narration visuelle assistées par l'IA avec Lumen5.",
        link: "https://www.coursera.org/account/accomplishments/records/TKWFWGMHKT4M",
        file: "/certificates/lumen5.jpg",
        color: "#EA4335",
    },
    {
        id: 4,
        name: "OpenAI pour les débutants : Les assistants IA pour les gestionnaires de projet",
        issuer: "Coursera",
        date: "Sept. 2025",
        description:
            "Utilisation des assistants IA d'OpenAI pour la gestion et l'organisation de projets.",
        link: "",
        color: "#412991",
    },
    {
        id: 5,
        name: "Prompt Engineering Generative AI for Marketing & Advertising",
        issuer: "Coursera",
        date: "Sept. 2025",
        description:
            "Techniques de prompt engineering appliquées au marketing et à la publicité générative.",
        link: "",
        color: "#ff6d00",
    },
    {
        id: 6,
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Avr. 2025",
        description:
            "Conception de pages web adaptatives avec HTML, CSS, Flexbox et Grid.",
        link: "",
        color: "#0a0a23",
    },
    {
        id: 7,
        name: "Comprendre le Web",
        issuer: "OpenClassrooms",
        date: "Sept. 2024",
        description:
            "Fondamentaux du Web : histoire, langages, frameworks et rôle des développeurs.",
        link: "",
        color: "#7451eb",
    },
    {
        id: 8,
        name: "Concevez votre réseau TCP/IP",
        issuer: "OpenClassrooms",
        date: "Avr. 2024",
        description:
            "Architecture réseau, adressage IP, routage, DHCP et DNS avec Cisco Packet Tracer.",
        link: "",
        color: "#2f8d46",
    },
    {
        id: 9,
        name: "Intelligence Artificielle Au Quotidien",
        issuer: "ODC Clubs",
        date: "—",
        description:
            "Initiation aux usages concrets de l'intelligence artificielle au quotidien.",
        link: "",
        color: "#00b8d9",
    },
];

export const navLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Expériences", href: "#experiences" },
    { label: "Projets", href: "#projets" },
    { label: "Compétences", href: "#competences" },
    { label: "Certificats", href: "#certificats" },
    { label: "Contact", href: "#contact" },
];
