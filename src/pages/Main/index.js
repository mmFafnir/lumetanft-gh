import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Home from '../../Components/Home';
import { MainLangs } from '../../scripts/MainLangs';
import Benefit from './components/Benefit';
import Ecosystem from './components/Ecosystem';
import FindBudda from './components/FindBudda';


const Main = () => {

    const lang = useSelector(state => state.lang);
    const [classLang, setClassLang] = useState(null);
    console.log(lang)
    useEffect(() => {
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [lang])

    useEffect(() => {
        if(!classLang) {
            setClassLang(new MainLangs(lang))
        }
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [classLang]) 


    return (
        <main>
            <Home />
            <FindBudda />
            <Benefit />
            <Ecosystem />
        </main>
    );
};

export default Main;