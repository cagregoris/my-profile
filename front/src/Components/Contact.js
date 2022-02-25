import './contact.css'
import React from 'react'
import ContactForm from './ContactForm';

import './contactForm.css'




function Contact({isSubmitted, sendEmail}) {


  return ( 
    <section className="contact" id="contact">
      {!isSubmitted ? <ContactForm sendEmail={sendEmail}/> : <div className='submit-message'>Thank you for your email!</div>}
    
    </section>
  )
}

export default Contact
