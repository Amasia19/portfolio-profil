import { Link } from "react-router-dom";
import '../styles/Project.scss';


const projectData = [
    {
        image: "seo1.png",
        title: "Projet SEO - Jennysanmartin.com",
        description: "Dans ce projet, j'ai réalisé une introduction, recherche de mots-clés, optimisation on-page, netlinking et reporting détaillé."
    },
    {
        image: "seo2.png",
        title: "Projet SEO - Vison Renov",
        description: "Optimisation de contenu santé avec ciblage longue traîne, maillage interne et suivi des positions sur Google."
    },
    {
        image: "seo3.png",
        title: "Projet SEO - E-commerce Shop",
        description: "Mise en place d'une stratégie de netlinking, optimisation des fiches produits, balisage sémantique, et Google Analytics."
    },
    {
        image: "seo4.png",
        title: "Projet SEO - Actualité Locale",
        description: "Création de contenu localisé, stratégie backlinks presse, amélioration du CTR dans Google Search Console."
    },
    {
        image: "seo5.png",
        title: "Projet SEO - Portfolio Freelance",
        description: "Optimisation de site vitrine personnel pour un meilleur positionnement sur le mot-clé 'freelance SEO Madagascar'."
    },
    {
        image: "seo6.png",
        title: "Projet SEO - Éducation en ligne",
        description: "SEO pour plateforme de cours, amélioration des performances techniques (Core Web Vitals) et structure Hn."
    }
];

const Projects = () => {
    return (
        
            <div className="portfolio-container">
            <header className="header">
                            <img className="logo" src="./logo1.png" alt="" />
                            <nav className="nav-flex">
                            <Link to="/"> <span><a className="text-orange">Home</a></span>
                            </Link>
                            <Link to="/about"> 
                              <span>
                                <a className="about">About me</a>
                                </span>
                            </Link>
                            <Link to="/hire">   
                            <span>
                                <a className="about">Contact me</a>
                                </span>
                            </Link>
                            </nav>
                        </header>
                       
                        <div className="projects-container">
            <h1 className="projects-heading"><span>WELCOME</span> TO MY PROJECTS</h1>

            <div className="tabs">
                <button className="tab-button active">SEO</button>
                <Link to="/design">
                    <button className="tab-button">UI/UX DESIGN</button>
                </Link>
                <Link to="/react">
                    <button className="tab-button">REACT</button>
                </Link>
            </div>

            <div className="tab-content">
                <h2 className="tab-title">PROJET SEO</h2>
                <div className="cards">
                    {projectData.map((project, index) => (
                        <div className="card" key={index}>
                            <div className="image-wrapper">
                            <img
                              src={`${project.image}`}  
                              alt={project.title}
                              className="project-image"
                           />   
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;
