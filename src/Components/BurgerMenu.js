import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { gitUrl } from '../App';

const BurgerMenu = () => {

  const dispatch = useDispatch();
  const burgerState = useSelector(state => state.burger);


    return (
        <nav className={`mt-mobile ${!burgerState ? 'nav-open' : ''}`}>
              <div className="mt-munu-mb">
                <div className="header-navigation-wr">
                    <ul className="menu-mobile">
                      <li><Link to={`${gitUrl}`}>Main</Link></li>
                      <li><Link to={`${gitUrl}about`}>About</Link></li>
                      <li><Link to={`${gitUrl}roadmap`}>Road map</Link></li>
                      <li><Link to={`${gitUrl}how-to-buy`}>How to buy</Link></li>
                      <li><Link to={`${gitUrl}faq`}>FAQ</Link></li>
                    </ul>
                </div>  
              </div>  
          </nav>
    );
};

export default BurgerMenu;