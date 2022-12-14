
import React from 'react';
import BuddaSlider from './UI/BuddaSlider';

const Home = () => {
    return (
        <div className='wallet-block container'>
            <div class="sensey">
                <img src="static/images/sesnay.svg"/>
                <div class="mint-wrap">
                    <button class="mint-top" >MINT</button>
                    <button class="wallet-top"  >
                        <span>
                            CONNECT <br/> WALLET
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="34" viewBox="0 0 39 34" fill="none">
                            <path d="M0 4.25C0 1.9125 1.755 0 3.9 0H33.15C33.6672 0 34.1632 0.223883 34.5289 0.622398C34.8946 1.02091 35.1 1.56141 35.1 2.125V4.25H3.9V6.375H37.05C37.5672 6.375 38.0632 6.59888 38.4289 6.9974C38.7946 7.39591 39 7.93641 39 8.5V29.75C39 30.8772 38.5891 31.9582 37.8577 32.7552C37.1263 33.5522 36.1343 34 35.1 34H3.9C2.86566 34 1.87368 33.5522 1.14228 32.7552C0.410892 31.9582 0 30.8772 0 29.75V4.25ZM32.175 23.375C32.9508 23.375 33.6947 23.0392 34.2433 22.4414C34.7918 21.8436 35.1 21.0329 35.1 20.1875C35.1 19.3421 34.7918 18.5314 34.2433 17.9336C33.6947 17.3358 32.9508 17 32.175 17C31.3992 17 30.6553 17.3358 30.1067 17.9336C29.5582 18.5314 29.25 19.3421 29.25 20.1875C29.25 21.0329 29.5582 21.8436 30.1067 22.4414C30.6553 23.0392 31.3992 23.375 32.175 23.375Z" fill="url(#paint0_linear_427_270)"/>
                            <defs>
                            <linearGradient id="paint0_linear_427_270" x1="-87.5" y1="45" x2="92.3627" y2="76.6316" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6AE6C4"/>
                            <stop offset="1" stop-color="#8C84F6"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div class="mb-star-bg" background="red">
                    <img src="static/images/full-mb-budda.png" />
                </div>
            </div>
        </div>
    );
};

export default Home;