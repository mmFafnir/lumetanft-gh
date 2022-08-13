import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LangHeader } from '../scripts/lang';
import BurgerMenu from './BurgerMenu';
import BuddaSlider from './UI/BuddaSlider';
import BurgerIcon from './UI/BurgerIcon';
import Lang from './UI/Lang';
import Logo from './UI/Logo';
import Socials from './UI/Socials';

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
        setClassLang(new LangHeader(lang))
    }, [])
    return (
        <>
            <BurgerMenu />
            <header>
                {
                    path !== '/roadmap' ? <img class="bg-header" src="../static/images/bg-header.png" /> : null
                    
                }
                <div class="container">
                    <div class="logo-wrap">
                        <Logo />
                        <ul class="menu-top">
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/roadmap">Road map</Link></li>
                            <li><Link to="/how-to-buy">How to buy</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                        <div class="lang-mb-wrap">
                            <Lang />
                            <BurgerIcon />  
                        </div>
                    </div>
                    {path === '/' ? <BuddaSlider /> : null}
                </div>
                <Socials />

            </header>
        </>
    );
};

export default Header;