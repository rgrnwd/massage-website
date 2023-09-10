import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact: React.FC = () => {
    return <div className="page">
        <h1 className="page-header">Contact</h1>
        <div className="text-content">
            For bookings outside of the availability hours and other inquiries, 
            please contact me using the form below.
        </div>
        <div className="text-content">
            You can also contact me directly via email <a href="mailto:duncan@dgmassage.com.au"><b>duncan@dgmassage.com.au</b></a> or phone <b>0433 974 738</b>
        </div>
        <ContactForm/>
    </div>
}

export default Contact
