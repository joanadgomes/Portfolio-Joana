import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  // status after send message
  const [statusMessage, setStatusMessage] = useState("");

  // emailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_66fhsql', 'template_kz8hhaa', form.current, 'SWjioG-FEfJBA23bC')
      .then((result) => {
          console.log(result.text);
          setStatusMessage("Email sent success");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact" className="contact-box">
      <h2 className='title'>Contact Me</h2>

      <div className='box-contacts'>
        <div className='contact-options'>
          <article className='contact-option'>
            <h3 className="uil uil-whatsapp contact-icon"></h3>
            <h4>Whatsapp</h4>
            <h5>+351 914964454</h5>
            <a href="https://api.whatsapp.com/send?phone=351914964454" rel="noreferrer" target="_blank">Send a message</a>
          </article>

          <article className='contact-option'>
            <h3 className="uil uil-envelope contact-icon"></h3>
            <h4>Email</h4>
            <h5>joanadiogog@gmail.com</h5>
            <a href="mailto:joanadiogog@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>

          <article className='contact-option'>
            <h3 className="uil uil-linkedin-alt contact-icon"></h3>
            <h4>Linkedin</h4>
            <h5>in/joanadgomes</h5>
            <a className="contact" href="https://www.linkedin.com/in/joanadgomes/" rel="noreferrer" target="_blank">Go to my profile</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="17" placeholder='Your message' required></textarea>
          <button type='submit' className='button-form'>Send message</button>
          <div className='status-message'>{statusMessage}</div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
