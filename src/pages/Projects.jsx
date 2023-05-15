import './Projects.css';
import { Link } from 'react-router-dom';
import devhub from '../assets/devhub.jpg';
import babysitter from '../assets/babysitter.jpg';
import snake from '../assets/snake.jpg';

function Projects() {
  return (
    <div id='projects' className="projects">
        <h1 className="title">My Projects</h1>

      {/* dev hub project */}
      <div className="each-project">
        <div className="box">
          <Link
            className="linkto"
            to="https://dev-hub-front.netlify.app/"
            target="_blank"
          >
            <img className="project-image" src={devhub} alt="" />
            <div className="centered">
              <div className="text-image">Click to see</div>
            </div>
          </Link>
        </div>
        <div className="text-box">
          <h2>DevHub</h2>
          <p className="description">
            Our platform allows users to easily share job opportunities and
            exchange tips with other developers. In addition, users can take
            quizzes to refresh their knowledge and engage in real-time
            conversations with the devHub community via our Firebase-based chat.
            As a result, we were awarded both the most difficult code-wise and
            the best overall project prizes. <br /> <span>Ironhack March 2023.</span>
          </p>
        </div>
      </div>

{/* kiddo's care project */}
      <div className="each-project">
        <div className="box">
          <Link
            className="linkto"
            to="https://kiddoscare.cyclic.app/"
            target="_blank"
          >
            <img className="project-image" src={babysitter} alt="" />
            <div className="centered">
              <div className="text-image">Click to see</div>
            </div>
          </Link>
        </div>
        <div className="text-box">
          <h2>Kiddo`s Care</h2>
          <p className="description">
            Babysitting platform that connects parents with local babysitters.
            It allows parents to search for babysitters in their area based on
            their availability, experience, and other criteria. Also allows
            individuals to create profiles as babysitters and offer their
            services to parents. <br /> <span>Ironhack February 2023.</span> 
          </p>
        </div>
      </div>

{/* the hungry snake project */}
      <div className="each-project">
        <div className="box">
          <Link
            className="linkto"
            to="https://peterloyal.github.io/Project_1/"
            target="_blank"
          >
            <img className="project-image" src={snake} alt="" />
            <div className="centered">
              <div className="text-image">Click to see</div>
            </div>
          </Link>
        </div>
        <div className="text-box">
          <h2>The Hungry Snake</h2>
          <p className="description">
            Classic snake game, in a marine environment with some shrimps to
            eat, with a bonus of some trash that she need to avoid, developed
            with Canvas and DOM manipulation. <br /> <span>Ironhack January 2023.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
