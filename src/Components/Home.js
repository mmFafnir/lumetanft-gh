
import React from 'react';
import BuddaSlider from './UI/BuddaSlider';

const Home = () => {
    return (
        <div className='wallet-block container'>
            <div class="sensey">
                <img src="static/images/sesnay.svg"/>
                <div class="mint-wrap">
                    <button class="mint-top" >MINT</button>
                    <button class="wallet-top" >
                        <span>
                            CONNECT <br/> WALLET
                        </span>
                        <img src='static/images/wallet-top.svg'/>
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