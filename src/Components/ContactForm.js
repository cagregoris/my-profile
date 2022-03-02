import React from 'react';

import './contactForm.css';


const ContactForm = ({sendEmail}) => {

  return (
    <div className='container-form'>
      <h1>Get in Touch!</h1>
      <span id="cf-span">Dropping a line to say hello, ask for my resume, or see if we can build something together? Fill in your info in the form below and I look forward to hearing from you!</span>
      <form onSubmit={sendEmail}>
        <div className='field'> 
          <input type="text" name="from_name" id="name" required="required"/>
          <label for="from_name">Name<span className="required">*</span></label>
        </div>
        <div className='field'>
          <input type="text" name="from_email" id="email" required/>
          <label for="from_email">Email<span className="required">*</span></label>
        </div>
        <div className='field'>
          <textarea type="textbox" name="message" id="message" rows="8" required="required" />
          <label for="message" className='message'>Message<span className="required">*</span></label>
        </div>
      <button className='send-btn' type="submit" value="Send" >Send Email</button>
    </form>
    </div>
  )
}

export default ContactForm