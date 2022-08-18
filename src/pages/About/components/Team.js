
import React from 'react';


const team = [
    {
        img: './static/images/Riaz Zagi.png',
        name: 'Riaz Zagi',
        profession: 'Co-Founder',
        description: (<p>Communicative, goal-oriented, responsible, conscientious, forward-looking <br/><br/> Investment activities from 2019. Leading and managing activities from 2020.</p>),
    },
    {
        img: './static/images/Stelum.png',
        name: 'Stelum',
        profession: 'Co-Founder',
        description: (<p>Entrepreneurship, communication skills, responsibility, creativity, leadership qualities <br/><br/> Running his own business since 2011, investment activity since 2019. Creation and development of a dozen brands from scratch.</p>)

    },
    {
        img: './static/images/Boba.png',
        name: 'Boba',
        profession: 'Project Manager',
        description: (<p>Organizational skills, communication skills, responsibility, creativity, process optimization <br/><br/> Fullstack developer and IT-Consultant since 2017. Project Management since 2019. Investment activities since 2020.</p>)

    },
    {
        img: './static/images/Solarty.png',
        name: 'Solarty',
        profession: 'Concept Manager',
        description: (<p>Innovative abilities, conceptual and analytical thinking, reflexivity, sensitivity to aesthetics, out-of-the-box thinking, conveying knowledge in plain language. Ability for personal and business-oriented coaching (visionary)</p>)

    },
]
const Team = () => {
    return (
        <section className="mt-100">
            <h1 class="team">TEAM</h1>

            <div class="articules">
            {
                team.map(person => (
                    <div class="articule">
                        <div class="budda-image">
                            <img src={person.img} alt={person.name}/>
                        </div>
                        <h4>{person.name}</h4>
                        <h5>{person.profession}</h5>
                        {person.description}
                    </div>
                ))
            }
            </div>
        </section>
    );
};

export default Team;