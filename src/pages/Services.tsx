import React from 'react'

const Services: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Services</h1>
            <span className="services-header">Traditional Thai Massage</span>
            <div className="text-content">
                I learned it the traditional way; performed on a mat at floor level, fully dressed, 
                no lotions or creams. This is what I did for three years, before studying remedial massage. 
                I still enjoy practicing this way, and I do incorporate many Thai techniques (or variations) 
                into my remedial massage work. 
                The techniques and theory of Thai massage are comparable with modern anatomical understanding.
            </div>
            <span className="services-header">Remedial Massage</span>
            <div className="text-content">
                No text yet
            </div>
            <span className="services-header">Myofascial Cupping</span>
            <div className="text-content">
                This involves plastic or glass cups being placed on the body and attached by means of suction-induced vacuum. 
                That&apos;s those red/purple circles you sometimes see on people. 
                There are a few methods of using these cups, including leaving them in place, gliding them over an area of the body 
                or placing them on the client while getting him or her to move the affected area. All these methods work by opening space between the skin, fascia and muscles, allowing fresh blood to into the area.

            </div>
            <span className="services-header">Dry Needling</span>
            <div className="text-content">
                A method of precisely targeting a trigger point or other sore area. 
                This involves inserting acupuncture-type needles into the muscles, 
                to really get to those tight and sore places. Unlike acupuncture however, 
                dry needling is used only for soft tissue (i.e. muscle and connective tissue) conditions.
            </div>
            <span className="services-header">Posture and Movement</span>
            <div className="text-content">
                No text yet
            </div>
            <span className="services-header">Pregnancy</span>
            <div className="text-content">
                I offer pregnancy massage from twelve weeks to full-term. 
            </div>
        </div>
    )
}

export default Services
