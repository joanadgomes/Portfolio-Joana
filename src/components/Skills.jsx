import html from '../assets/html.png'
import javascript from '../assets/js.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongoose from '../assets/mongoose.png'
import cloudinary from '../assets/cloudinary.png'
import bootstrap from '../assets/bootstrap.png'
import mongoDB from '../assets/mongoDB.png'

function Skills() {
  return (
    <div className="box-skills">
      <h2 className="subtitle">Skills...</h2>
      <ul className="list-skills">
        <li className="skill"> <img src={javascript} alt="" /></li>
        <li className='skill'> <img src={html} alt="" /></li>
        <li className="skill"> <img src={css} alt="" /></li>
        <li className="skill"> <img src={react} alt="" /></li>
        <li className="skill"> <img src={express} alt="" /> </li>
        <li className="skill"> <img src={bootstrap} alt="" /> </li>
        <li className="skill"> <img src={mongoDB} alt="" /> </li>
        <li className="skill"> <img src={node} alt="" /></li>
        <li className="skill"> <img src={mongoose} alt="" /> </li>
        <li className="skill"> <img src={cloudinary} alt="" /> </li>
      </ul>
    </div>
  );
}

export default Skills;
