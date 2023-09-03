import React from 'react'

const About: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>About Me</h1>
            <div className="text-content">
                I am a Remedial Massage therapist with a passion for helping people live and function at their best. 
                I earned my Diploma of Remedial Massage from Victoria University in 2020. 
                During my studies, I undertook a paid cadetship with the Western Bulldogs AFL team. 
                I am also qualified in dry needling and traditional Thai massage. 
                Currently I am studying for my Bachelor of Health Sciences in clinical myotherapy.
            </div>
            <div className="text-content">
                I came to realise the benefits of regular massage treatment, while living in Bangkok and training martial arts full time. 
                During 2017-18 I undertook several Thai Massage courses at the Wat Po Traditional Thai Medicine school and 
                began practicing my new-found skills on my coach and teammates at Bangkok Fight Lab. 
                I ran my own home-based Thai massage practice after moving to Munich, Germany.
            </div>
            <div className="text-content">
                On returning home to Melbourne, I wasted no time in becoming a qualified Remedial Massage therapist. 
                A keen problem solver, I believe in finding and addressing the root cause of a condition, 
                rather than just treating the symptoms. My treatments can include a mix of Remedial and traditional Thai techniques, 
                myofascial cupping, dry needling or mobility work, as well as posture and movement assessment & corrections 
                which are derived largely from more than a decade of Tai Chi practice. 
                I have worked with a variety of clients from professional athletes to office workers. 
                I work with several elite level football teams including Essendon Bombers, Melbourne Storm and Melbourne Rebels. 
            </div>
        </div>
    )
}

export default About
