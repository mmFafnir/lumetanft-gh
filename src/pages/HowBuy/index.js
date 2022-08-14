

import React from 'react';


import '../../styles/howtobuy.css'

const roadmapSteps = [
    {
        text: 'To buy a Sensay NFT you will need an Ethereum compatible crypto wallet and some ETH. We recommend to use the  ',
        link: {
            title: 'MetaMask.',
            href: 'https://metamask.io/'
        },
    },
    {
        text: 'MetaMask is available as a plugin for following browsers: Chrome, Firefox, Edge, Brave.',
        link: null,
    },
    {
        text: 'If you haven’t bought Ethereum yet, the MetaMask plugin has a button to get ETH from Coinbase (crypto exchange platform).',
        link: null,
    },
    {
        text: 'This plugin will allow you to access your Ethereum account from our website and make a purchase.',
        link: null,
    },
    {
        text: 'After the purchase, you can view your Sensay in your MetaMask wallet by visiting your profile page and checking purchases."',
        link: null,
    },

]

const HowBuy = () => {
    return (
        <main>
            <h1 className="how-to-buy-title">HOW TO BUY</h1>
            <div className="videoblock">
                <img src="./static/images/Stars15.png" alt=""/>
                <p>How to purchase our NFT?</p>
                <div className="videoblock_someinfo">The SENSAY is a collection of 10,000 unique NFT Buddhas that are part of something bigger!</div>
            </div>
            <section className='steps' >
                {
                    roadmapSteps.map((step, index) => (
                        <div key={index} className="numerous">
                            <div className="hollow"><h2>{index+1}</h2></div>
                            <p>
                                {step.text}
                                {
                                    step.link ? (
                                        <a href={step.link.href}>{step.link.title}</a>
                                    ) : null
                                }
                            </p>
                        </div>
                    ))
                }
            </section>
        </main>
    );
};

export default HowBuy;