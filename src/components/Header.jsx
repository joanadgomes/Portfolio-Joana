import { useState } from 'react';
import './Header.css';

function Header() {
   // toggle menu
   const [Toggle, showMenu] = useState(false);
   const [activeNav, setActiveNav] = useState('#');


  return (
    <header className="header">
      <nav className="nav-box">
        <div className={Toggle ? "links show-menu" : "links"}>
          <ul className="link-icon">
            <li className='each-link-icon'>
               <p className="uil uil-home icon"></p>
               <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'link active' : 'link'}>Home</a>
            </li>

            <li className='each-link-icon'>
               <p className="uil uil-user-circle icon"></p>
               <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'link active' : 'link'}>About</a>
            </li>
         
            <li className='each-link-icon'>
               <p className="uil uil-archive-alt icon"></p>
               <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'link active' : 'link'}>Projects</a>
            </li>

            <li className='each-link-icon'>
               <p className="uil uil-message icon"></p>
               <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'link active' : 'link'}>Contacts</a>
            </li>
          </ul>

          <i className="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
