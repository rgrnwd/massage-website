import React from 'react'

const Book: React.FC = () => {
    return <div className="page">
        <h1 className="page-header">Book Online</h1>
        <div className="text-content">
            For bookings outside of the availability hours listed below, 
            please <a href="/contact">contact me</a> as I may be able to accommodate.
        </div>
        <iframe className="bookings" src="https://www.halaxy.com/book/widget/duncan-greenwood/location/1000241" />
    </div>
}

export default Book
