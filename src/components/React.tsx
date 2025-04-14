import { Link } from "react-router-dom";
import '../styles/Project.scss';

const reactProjects = [
    {
        image: "react1.png",
        title: "App React – Gestion de Wi-Fi",
        description: "Développement d'une application en React avec gestion dynamique d'utilisateurs et intégration API."
    },
    {
        image: "react2.png",
        title: "Dashboard Admin – React",
        description: "Création d’un tableau de bord interactif en React, graphiques dynamiques, et gestion CRUD avec hooks."
    },
    {
        image: "react3.png",
        title: "Landing Page – FastTech",
        description: "Page d’accueil moderne en React pour un service Internet, animations avec Framer Motion, responsive."
    }
];

const ReactProjects = () => {
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
            <h1 className="projects-heading">WELCOME TO MY <span>PROJECTS</span></h1>

            <div className="tabs">
                <Link to="/projects">
                    <button className="tab-button">SEO</button>
                </Link>
                <Link to="/design">
                    <button className="tab-button">UI/UX DESIGN</button>
                </Link>
                <button className="tab-button active">REACT</button>
            </div>

            <div className="tab-content">
                <h2 className="tab-title">PROJET REACT</h2>
                <div className="cards">
                    {reactProjects.map((project, index) => (
                        <div className="card" key={index}>
                            <div className="image-wrapper">
                                <img
                                    src={`/images/${project.image}`}
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

export default ReactProjects;
