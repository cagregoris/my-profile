import './contact.css';
import React from 'react';
import ContactForm from './ContactForm';
import './contactForm.css';

import flower from '../Images/flower6.png';


function Contact({isSubmitted, sendEmail}) {


  return ( 
    <section className="contact" id="contact">
      {!isSubmitted ? <ContactForm sendEmail={sendEmail}/> : <div className='submit-message'>Thank you for your email! <img className='thankyou-flower' src={flower}/></div>}
    
    </section>
  )
}

export default Contact
