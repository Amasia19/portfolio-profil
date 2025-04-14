import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import '../styles/Portfolio.scss';

const Portfolio = () => {
    const colors = ["#800000", "#555555", "#008000", "#808000", "#000080", "#800080", "#008080"];


    const [bgColor, setBgColor] = useState("#3399cc");

    useEffect(() => {
        const interval = setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setBgColor(randomColor);
        }, 2000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="portfolio-container">
            <header className="header">
                <img className="logo" src="/logo1.png" alt="" />
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

            <div className="portfolio-content">
                <div className="text-section">
                    <h2 className="intro-text">Welcome to my site</h2>
                    <h1 className="main-heading">
                        "Hi, I'm <span className="highlight">Rajaobelina Amasia</span>, a <br /><span className="highlight-orange">UI/UX Designer, développeur web & junior SEO</span>"
                    </h1>
                    <p className="description">
                        Passionate about digital marketing and search engine optimization, I am a Junior SEO Specialist dedicated to
                        improving website rankings on search engines. I have developed skills in keyword research, on-page
                        optimization, performance analysis, and link-building strategies.
                    </p>
                    <div className="button-container">
                        <Link to="/hire"><Button className="hire-button">Hire me!</Button></Link>
                        <Link to="/projects"><Button className="project-button">My Project</Button></Link>
                        <a className="link" href="src/assets/image/CV_AMASIA.pdf" download="CV_Amasia.pdf">
                            <Button className="download">
                                <img src="src/assets/image/download.svg" alt="" />
                                Download My CV
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="image-section" >
                    <img src="src/assets/image/img.png" alt="Amasia SEO Portfolio" className="portfolio-image" />
                    <div className="bg-deco" style={{ backgroundColor: bgColor }}></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;