import '../styles/About.scss';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div>
      <div className="about-me">
        <div className="left-panel">
          <Link to="/">
            <img className="logo" src="./logo1.png" alt="" />
          </Link>
          <h1>AMASIA RAJAOBELINA</h1>
          <p>UI/UX Designer, développeur web & Junior SEO</p>
          
        </div>

        <div className="right-panel">
          <h2>ABOUT <span>ME</span></h2>
          <div className="sections">

            <div className="section">
              <button className="button">Contact</button>
              <p><strong>ADDRESS</strong><br />Madagascar</p>
              <p><strong>CONTACT NUMBER</strong><br />+261 387061533</p>
              <p><strong>EMAIL ADDRESS</strong><br />amasiarajaobelina.jw@gmail.com</p>
            </div>

            <div className="section">
              <button className="button">Experience</button>
              <p><strong>2018–2019</strong><br />Lorem ipsum dolor sit amet</p>
              <p><strong>2020–2023</strong><br />Lorem ipsum dolor sit amet</p>
              <p><strong>2024–2025</strong><br />Lorem ipsum dolor sit amet</p>
            </div>

            <div className="section">
              <button className="button">Education</button>
              <p><strong>2018–2019</strong><br />Lorem ipsum dolor sit amet</p>
              <p><strong>2020–2021</strong><br />Lorem ipsum dolor sit amet</p>
              <Link to="/"><button className="back"><span>Back to Home</span></button>  </Link>
            </div>
            <div className="section">
              <button className="button">Skills</button>
              <div className="skill">
                <span>HTML/CSS</span>
                <input type="range" value={90} readOnly />
              </div>
              <div className="skill">
                <span>REACT JS</span>
                <input type="range" value={70} readOnly />
              </div>
              <div className="skill">
                <span>SEO</span>
                <input type="range" value={80} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
