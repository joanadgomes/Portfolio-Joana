import './Home.css';
import Social from '../components/Social';

function home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className='social-box'>
          <Social />
          <div className="profile-image"></div>
        </div>
        <div className="info-box">
          <h3 className='hello'>Hello! I am</h3>
          <h1>Joana Gomes</h1>
          <h2 className="position">Fullstack Developer</h2>
          <a href="#contact" className="box-talk">
            <h3 className="uil uil-arrow-circle-right button-touch">Get in touch!</h3>
          </a>
          <a href="#about" className="scroll_down">
          Scroll Down
        </a>
        </div>
        
      </div>
    </section>
  );
}

export default home;
