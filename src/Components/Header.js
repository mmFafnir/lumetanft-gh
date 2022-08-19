import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import BuddaSlider from './UI/BuddaSlider';
import BurgerIcon from './UI/BurgerIcon';
import Lang from './UI/Lang';
import Logo from './UI/Logo';
import Socials from './UI/Socials';
import { HeaderLangs } from '../scripts/HeaderLangs';

import { gitUrl } from '../App'; 
const Header = () => {

    const location = useLocation()
    
    const [path, setPath] = useState(window.location.pathname);
    const [classLang, setClassLang] = useState(null);

    useEffect(() => {
        setPath(window.location.pathname)
    }, [location])
    
    const lang = useSelector(state => state.lang);
    // const LangClass = ;
    
    useEffect(() => {
        if(classLang) {

            classLang.changeLang(lang)
        }
    }, [lang])


    useEffect(() => {
        setPath(window.location.pathname)
        if(!classLang) {
            setClassLang(new HeaderLangs(lang))
        }
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [classLang]) 
    return (
        <>
            <BurgerMenu />
            <header>
                {
                    path !== '/roadmap' ? <img class="bg-header" src="static/images/bg-header.png" /> : null
                    
                }
                <div class="container">
                    <div class="logo-wrap">
                        <Logo />
                        <ul class="menu-top">
                            <li><Link to={`${gitUrl}about`}>ABOUT</Link></li>
                            <li><Link to={`${gitUrl}roadmap`}>Road map</Link></li>
                            <li><Link to={`${gitUrl}how-to-buy`}>How to buy</Link></li>
                            <li><Link to={`${gitUrl}faq`}>FAQ</Link></li>
                        </ul>
                        <div class="lang-mb-wrap">
                            <Lang />
                        <Socials />
                            <BurgerIcon />  
                        </div>
                    </div>
                    {path === `${gitUrl}` ? <BuddaSlider /> : null}
                </div>

            </header>
        </>
    );
};

export default Header;