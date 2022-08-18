import React from 'react';
import Iframe from 'react-iframe';

const FindBudda = () => {
    return (
        <section className='find-budda'>
            <img className="bg-find-budd" src="static/images/Ellipse9.svg"/>

            <div className='container' >
                <h2 className="find-budda-title">FIND YOUR BUDDA!</h2>

                <div className="find-budda-body">Add value to your collections together <br/> with. Join our NFT community right now!</div>
                
                <div className='find-budda-video-section'>
                    <div className="video-block-wrap">
                        <img className="yin-yang-left" src="static/images/inyan.png" alt=""/>
                        <img className="yin-yang-right" src="static/images/inyan.png" alt=""/>
                        
                        <div className="budda-video">
                            <Iframe
                                width="100%" 
                                height="385" 
                                style="border-radius: 15px; max-width: 685px;" 
                                src="https://www.youtube.com/embed/zIDfq4_Ew-U" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen="" />
                        </div>
                    </div>
                </div>

                <div className="company-wrap">
                    <div className="company-block">
                        <img className='star' src="static/images/star.svg"/>
                        <span>

                            The SENSAY is a collection of 10,000 unique NFT Buddhas that are part of something bigger! 
                        </span>
                    </div>

                    <div className="company-block2">
                        <img className='star' src="static/images/star.svg"/>
                        <span>

                        Owning an NFT opens up access to the illuminated club as well as passive income in the horizon. Future privileges will be unlocked by the community as the roadmap progresses
                        </span>
                    </div>
                    <div className="clear"></div>
                </div>
            </div> 

            <div className="comapny-budda">
                <img className="bg-company-budda" src="static/images/company-budda-bg.png" />
                <div className="d-flex">
                    <div className="company-img"><img src="static/images/company-img.png" /></div>
                    <div className="company-img2"><img src="static/images/company-img2.png" /></div>
                    <div className="company-img3"><img src="static/images/company-img3.png" /></div>
                    <div className="company-img4"><img src="static/images/company-img4.png" /></div>
                </div>
            
            </div>
        </section>
    );
};

export default FindBudda;