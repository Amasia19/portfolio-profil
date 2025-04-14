import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/Portfolio.scss';
import '../styles/Hire.scss';

const Hire = () => {
    const [buttonText, setButtonText] = useState('Send');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const images = ["./images.png", "./personne.png"];
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        if (!email.trim() || !message.trim()) {
            setError('Veuillez renseigner tous les champs.');
            return;
        }

        setError(''); 
        setButtonText('Success!');

        setEmail('');
        setMessage('');

        setTimeout(() => {
            setButtonText('Send');
        }, 3000);
    };

    const animatedText = (text: string): React.ReactNode[] => {
        return text.split('').map((letter: string, index: number) => (
          <span key={index} className={`letter-${index}`}>
            {letter}
          </span>
        ));
      };
    
    

    return (
        <div className="portfolio-container">
            <header className="header">
                <Link to="/"> 
                <img className="logo" src="src/assets/image/logo1.png" alt="" /></Link>
                <nav className="nav-flex">
                    <Link to="/"> <span><a className="text-orange">Home</a></span></Link>
                    <Link to="/about"><span><a className="about">About me</a></span></Link>
                    <Link to="/hire"><span><a className="about">Contact me</a></span></Link>
                </nav> 
            </header>
            <section>
                <div className='container'>
                    <div className='contact'>
                        <div className='center-img'>
                            <div className='profil-img'>
                                <img className='logo-p' src={currentImage} alt="Profil" />
                            </div>
                            <h3>CONTACT ME</h3>
                        </div>
                        <p className='txt'>Need a project or have questions about my work? Feel free to get in touch with me!</p>
                        <div >
                <a href="tel:+261387061533" className="flex-image">
                  <img src="./phone1 .svg" alt="Téléphone" />
               <p>+261 38 70 615 33</p>
                  </a>
                     </div>    
                     <div >
                          <a href="mailto:amasiarajaobelina.jw@gmail.com" className="flex-image">
                            <img src="./mail.svg" alt="Email" />
                          <p>amasiarajaobelina.jw@gmail.com</p>
                           </a>
                      </div>

                        <div className='flex-image'><img src="./linkedin.svg" alt="" /><p>Amasia Rajaobelina</p></div>
                        <div className="flex-image">
                <a href="https://www.facebook.com/amasia.rajaobelina" target="_blank" rel="noopener noreferrer">
                    <img src="./facebook.svg" alt="Facebook" />
                   </a>
               <a href="https://www.facebook.com/amasia.rajaobelina" target="_blank" rel="noopener noreferrer">
               <p>Amasia Rajaobelina</p>
                 </a>
</div>
                    </div>  
                    <div className='formulaire'>
                        <h2>{animatedText("GET IN TOUCH")}</h2>
                        <input 
                            type="text" 
                            placeholder='Enter your email' 
                            name='email' 
                            className='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder='Your message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {error && <p className="error-message">{error}</p>}
                        <div className='button'>
                            <div></div>
                            <button 
                                className='send' 
                                onClick={handleClick} 
                                disabled={!email.trim() || !message.trim()}
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hire;
