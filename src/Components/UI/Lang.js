import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { langs, SET_LANG } from '../../store/reducer/LangReducer';


const langsArr = [
    {
        lang: langs.RUS,
        icon: '../static/images/russia.svg'
    },
    {
        lang: langs.USA,
        icon: '../static/images/lang-icon.svg'
    },
    {
        lang: langs.UAE,
        icon: '../static/images/sudan.svg'
    },
    {
        lang: langs.IND,
        icon: '../static/images/india.svg'
    },
        {
        lang: langs.CHN,
        icon: '../static/images/china.svg'
    },

]

const Lang = () => {

    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    
    const [open, setOpen] = useState(false);

    const changeLangHandler = (newLang) => {
        dispatch({
            type: SET_LANG,
            payload: newLang.lang
        })
        setOpen(false);
    }
    return (
        <div className="search-select">
            <span 
                onClick={() => setOpen(!open)} 
                className="field"
            >
                <label className="seltext" for="opened">{langsArr.find(item => item.lang === lang).lang}</label>
                <i className="icon">
                    <img src={langsArr.find(item => item.lang === lang).icon}/>
                </i>
            </span>
            <ul className={`select ${open ? 'open' : 'close'}`}>
                <li className="icon arrow"></li>
                {
                    langsArr.map(lang => (
                        <li 
                            key={lang.lang} 
                            className="sel" 
                            onClick={() => changeLangHandler(lang)}
                        >
                            <span>{lang.lang}</span> 
                            <i className="icon list">
                                <img src={lang.icon}/>
                            </i>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Lang;