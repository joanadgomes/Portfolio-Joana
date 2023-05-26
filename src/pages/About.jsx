import CV from '../assets/CV.pdf';
import './About.css';
import Skills from '../components/Skills';

function About() {
  return (
    <section id="about">
      <div className="about-me">
        <h1 className="title">About Me</h1>
        <p className="text-about">
          I recently embarked on an exciting career change, leveraging my Marine
          Biology background to become a full-stack developer. An innate curiosity and a desire
          for personal and professional growth propelled me towards the realm of
          programming. Through meticulous research, seeking counsel from peers
          in the field, I ultimately enrolled in Ironhack, where I honed my skills as a full-stack developer. Drawing from my background,
          I possess a profound understanding of the value of collaboration,
          adaptability, and problem-solving and I am eager to
          apply these attributes to your team. I am now
          driven to improve my skills and contribute to projects that create a
          positive impact. 
        </p>
        <a href={CV} download className="download-cv">
          <h3 className="uil uil-arrow-circle-right cv-icon">Download CV</h3>
        </a>
      </div>
      <Skills />
    </section>
  );
}

export default About;
