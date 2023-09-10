import React from 'react'

const Book: React.FC = () => {
    return <div className="page">
        <h1 className="page-header">Book Online</h1>
        <div className="text-content">
            For bookings outside of the availability hours listed below, 
            please <a href="/contact">contact me</a> as I may be able to accommodate.
        </div>
    </div>
}

export default Book
