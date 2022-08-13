import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const BurgerMenu = () => {

  const dispatch = useDispatch();
  const burgerState = useSelector(state => state.burger);


    return (
        <nav className={`mt-mobile ${!burgerState ? 'nav-open' : ''}`}>
              <div className="mt-munu-mb">
                <div className="header-navigation-wr">
                    <ul className="menu-mobile">
                      <li><Link to="/">Main</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/roadmap">Road map</Link></li>
                      <li><Link to="/how-to-buy">How to buy</Link></li>
                      <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>  
              </div>  
          </nav>
    );
};

export default BurgerMenu;