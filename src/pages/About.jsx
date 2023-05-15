import CV from '../assets/CV.pdf';
import './About.css';
import Skills from '../components/Skills';

function About() {
  return (
    <div id="about">
      <div className="about-me">
        <h1 className="title">About me</h1>
        <p className="text-about">
          I recently underwent an exciting career change, leveraging my Marine
          Biology background to become a full-stack developer. I used to work at
          the Lisbon Zoo for 5 years, followed by working as a skipper and a
          dive master at a diving school. However, I felt the need to explore
          new avenues of learning and development, which led me to the world of
          programming. I conducted thorough research, consulted my friends in
          the field, and finally enrolled in IRONHACK, where I spent three
          months honing my skills as a full-stack developer. I am now driven to
          enhance my skills and contribute to projects that create a positive
          impact. Given my background, I am well-aware of the significance of
          collaboration, adaptability, and problem-solving, and I am thrilled to
          apply these skills to your team. I aspire to contribute to the success
          of every project I work on, and I am eager to continue my growth as a
          developer.
        </p>
        <a href={CV} download className="download-cv">
          <h3 className="uil uil-arrow-circle-right cv-icon">Download CV</h3>
        </a>
      </div>
      <Skills />
    </div>
  );
}

export default About;
