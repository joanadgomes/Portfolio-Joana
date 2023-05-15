import './Home.css';
import Social from '../components/Social';

function home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <Social />
        <div className="profile-image"></div>
        <div className="info-box">
          <h2>
            {' '}
            <span>Hi, my name is</span> <br /> Joana Gomes
          </h2>
          <h3 className="position">Fullstack Developer</h3>
          <a href="#contact" className="box-talk">
            <h3 className="uil uil-arrow-circle-right arrow">Get in touch!</h3>
          </a>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </section>
  );
}

export default home;
