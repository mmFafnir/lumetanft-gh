
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import faq from '../../utils/faq.json';
import '../../styles/faq.css'
import { FaqLangs } from '../../scripts/FaqLangs';


const faqArr = faq.map((item, index) => ({
    id: index+1,
    title:item.title,
    text: item.text 
}))
const FAQ = () => {
    const [currentOpen, setCurrentOpen] = useState(0);
    const accordionHandler = (id) => {
        if(id == currentOpen) {
            setCurrentOpen(0)
            return    
        }
        setCurrentOpen(id)
    }


    const renderAccordion = (item, index) => {
        return (
            <div key={index} className="que-ans">
                <div className="question" onClick={() => accordionHandler(item.id)}>
                    <p>{item.title}</p>
                    <div className="circle">
                        <svg className="menu-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                        </svg>
                    </div>
                </div>
                <div className={`answer ${item.id === currentOpen ? 'active' : ''}`} >{item.text}</div>
            </div>
        )
    }


    const lang = useSelector(state => state.lang);
    const [classLang, setClassLang] = useState(null);
    useEffect(() => {
        if(classLang) {
            classLang.changeLang(lang)
        }
        
    }, [lang])

    useEffect(() => {
        if(!classLang) {
            setClassLang(new FaqLangs(lang))
        }
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [classLang]) 
    return (
        <div>
            <main >
                <h1 className='faq-title'>FAQ</h1>
                <section className='faq-section'>
                    <div className='left-column'>
                        {
                            faqArr.slice(0, 8).map ((item, index) => renderAccordion(item, index))
                        }

                    </div>
                    <div className='right-column'>
                        {
                            faqArr.slice(8,faq.length).map ((item, index) => renderAccordion(item, index))
                        }

                    </div> 
                </section>
            </main>
        </div>
    );
};

export default FAQ; 