import React from 'react'
import emailjs from '@emailjs/browser'

import '../styles/contact.sass';

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    //@ts-ignore
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      
      emailjs.sendForm('service_m3731x7', 'template_ziqexc5', e.currentTarget, '94dRR_IcmDKnTnDtg')
     .then((result: any) => {
         // show the user a success message
        console.log(result)
        setFormStatus('Sent')
     }, (error: any) => {
         // show the user an error
         console.log(error)
        setFormStatus('Failed')
     });
    }
    return (
      <div className="form">
        <h2 className="container">Submit an Inquiry</h2>
        <form onSubmit={onSubmit}>
          <div className="container">
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <input className="contact-box" type="text" id="name" required />
          </div>
          <div className="container">
            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <input className="contact-box" type="email" id="email" required />
          </div>
          <div className="container">
            <label className="contact-label" htmlFor="message">
              Message
            </label>
            <textarea className="contact-box" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    )
  }
  export default ContactForm