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
                console.log(result)
                setFormStatus('Sent')
            }, (error: any) => {
                console.log(error)
                setFormStatus('Failed to Send! Please email/sms directly')
            });
    }
    return (
      <div className="form">
        <h2 className="container">Submit an Inquiry</h2>
        <form onSubmit={onSubmit}>
          <div className="container">
            <label className="contact-label" htmlFor="from_name">
              Name
            </label>
            <input className="contact-box" type="text" id="from_name" required />
          </div>
          <div className="container">
            <label className="contact-label" htmlFor="reply_to">
              Email
            </label>
            <input className="contact-box" type="email" id="reply_to" required />
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