import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AboutLangs } from '../../scripts/AboutLangs';
import Images from './components/Images';
import Philosophy from './components/Philosophy';
import Team from './components/Team';

const About = () => {


    const lang = useSelector(state => state.lang);

    const mainRef = useRef(null);
    const [classLang, setClassLang] = useState(null);
    useEffect(() => {
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [lang])

    useEffect(() => {
        if(!classLang) {
            setTimeout(() => {
                // const classL = new AboutLangs(lang); 
                // classL.changeLang(lang)
                // console.log(mainRef)
                setClassLang(new AboutLangs(lang))
            },100)
        }
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [classLang])
    // useEffect(() => )
    
    return (
        <main ref={mainRef} className='about-page'>
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