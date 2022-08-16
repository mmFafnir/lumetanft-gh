import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AboutLangs } from '../../scripts/AboutLangs';
import Images from './components/Images';
import Philosophy from './components/Philosophy';
import Team from './components/Team';

const About = () => {


    const lang = useSelector(state => state.lang);
    const [classLang, setClassLang] = useState(null);
    useEffect(() => {
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [lang])

    useEffect(() => {
        setTimeout(() => {
            setClassLang(new AboutLangs(lang))
        },300)
    }, [])

    return (
        <main className='about-page'>
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