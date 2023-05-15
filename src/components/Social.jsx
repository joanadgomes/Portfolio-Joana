import { Link } from 'react-router-dom';

function Social() {
  return (
    <div className="home-social">
      <Link
        to="https://github.com/joanadgomes"
        target="_blank"
        className="social-icon"
      >
        <i className="uil uil-github-alt"></i>
      </Link>
      <Link
        to="https://www.linkedin.com/in/joanadgomes/"
        target="_blank"
        className="social-icon"
      >
        <i className="uil uil-linkedin-alt"></i>
      </Link>
    </div>
  );
}

export default Social;
