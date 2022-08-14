import React from 'react';

const Benefit = () => {
    return (
        <section className="benefit">
            <div className="container">
                <div className="benefit-title">BENEFITS</div>
                <div className="benefit-block">
                    <div className="benefit-icon">
                        <img src="./static/images/dashicons.svg"/>
                    </div>
                    <p className="benefit1">Passive income in the form of native tokens</p>
                </div>
                <div className="benefit-block2">
                    <div className="benefit-icon">
                        <img src="./static/images/benefit-icon.svg"/>
                    </div>
                    <p className="benefit2">Participation in discussions and voting on project development</p>
                </div>

                <div className="benefit-block">
                    <div className="benefit-icon">
                        <img src="./static/images/benefit-icon2.svg"/>
                    </div>
                    <p className="benefit3">Participation in lottery of NFT / native tokens</p>
                </div>

                <div className="benefit-block3">
                    <div className="benefit-icon">
                        <img src="./static/images/benefit-icon3.svg"/>
                    </div>
                    <p className="benefit4">Joining the illuminated club on Discord</p>
                </div>
            </div>
        </section>
    );
};

export default Benefit;