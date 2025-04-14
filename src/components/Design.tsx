import { Link } from "react-router-dom";
import '../styles/Project.scss';


const designProjects = [
    {
        image: "img.png",
        title: "Design Portfolio – UI/UX",
        description: "Création de maquettes avec Figma, recherche utilisateur, wireframes, prototypes interactifs."
    },
    {
        image: "design2.png",
        title: "Dashboard Application",
        description: "Design d’un tableau de bord pour une application de gestion – navigation fluide et responsive design."
    },
    {
        image: "design3.png",
        title: "Application Mobile – Santé",
        description: "UI/UX complet pour une application médicale : parcours utilisateur simplifié, test d’utilisabilité."
    },
    {
        image: "design4.png",
        title: "Site Web Éducatif",
        description: "Création d’un site web pour plateforme d’apprentissage, focus sur l’accessibilité et la hiérarchie visuelle."
    }
];

const Design = () => {
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
            <h1 className="projects-heading">WELCOME <span>TO MY </span>PROJECTS</h1>

            <div className="tabs">
                <Link to="/projects">
                    <button className="tab-button">SEO</button>
                </Link>
                <button className="tab-button active">UI/UX DESIGN</button>
                <Link to="/react">
                    <button className="tab-button">REACT</button>
                </Link>
            </div>

            <div className="tab-content">
                <h2 className="tab-title">PROJET UI/UX DESIGN</h2>
                <div className="cards">
                    {designProjects.map((project, index) => (
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

export default Design;
