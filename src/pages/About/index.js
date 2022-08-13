import React from 'react';
import Images from './components/Images';
import Philosophy from './components/Philosophy';
import Team from './components/Team';

const About = () => {
    return (
        <main>
            <Images />
            <div class="about-title">
                <h1>ABOUT</h1>
            </div>
            <Philosophy />
            <Team />
        </main>
    );
};

export default About;