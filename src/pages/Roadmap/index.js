
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { RoudmapLangs } from '../../scripts/RoudmapLangs';
import BallImages from './components/BallImages';
import Images from './components/Images';

const Roadmap = () => {


    const lang = useSelector(state => state.lang);
    const [classLang, setClassLang] = useState(null);
    console.log(lang)
    useEffect(() => {
        if(classLang) {
            classLang.changeLang(lang)
        }
    }, [lang])

    useEffect(() => {
        setClassLang(new RoudmapLangs(lang))
    }, [])

    return (
        <>
            <Images />
            <main>
                <BallImages />
                <h1 className="roadmap-title">ROAD MAP</h1>
                <section className="path">
                    <div className="crowdfinding step">
                        <img src="./static/images/Balls/Ball0.png" alt="" className="ball-mb ball-mb-0"/>
                        <h4>Crowdfinding</h4>
                        <p>"Attracting investments through Crowdfinding Platforms Target 10.000 €"</p>
                    </div>
                    <div className="foundation step">
                        <img src="./static/images/Balls/Ball1.png" alt="" className="ball-mb ball-mb/-1"/>

                        <h4>Foundation</h4>
                        <p>Early sale of NFT for Buddha Foundation</p>
                    </div>

                    <div className="gpt step">
                        <img src="./static/images/Balls/Ball2.png" alt="" className="ball-mb ball-mb-2"/>
                        <h4></h4>
                        <div className="give-away">
                        <h5>Give away</h5>
                        <p>"Free distribution of NFT for the fulfilled conditions: 1. Subscribe to social networks (Twitter, Discord, Instagram) 2. Repost 2 posts from Twitter / Discord 3. Comment under the Twitter post with the answer, what did the NFT project like"</p>
                        </div>
                        <div className="partners">
                        <h5>Partners</h5>
                        <p>Free distribution of NFT for advertising and promotion of the project</p>
                        </div>
                        <div className="team">
                        <h5>Team</h5>
                        <p>Buffer / reserve for team and project development</p>
                        </div>
                    </div>

                    <div className="pre-sale step">
                        <img src="./static/images/Balls/Ball3.png" alt="" className="ball-mb ball-mb-3"/>
                        <h4>Pre-Sale</h4>
                        <p>"Pre-Sale of NFT for the fulfilled conditions: <br/> 1. Subscribe to social networks (Twitter, Discord, Instagram) <br/> 2. Repost 2 posts from Twitter <br/> 3. Comment under the Twitter post with the answer, what did the NFT project like"</p>
                    </div>

                    <div className="post-pre-sale step">
                        <img src="./static/images/Balls/Ball4.png" alt="" className="ball-mb ball-mb-4"/>
                        <h4>Post Pre-Sale</h4>
                        <p>"Post Pre-Sale of NFT for the fulfilled conditions: <br/> 1. Subscribe to social networks (Twitter, Discord, Instagram) <br/> 2. Repost 2 posts from Twitter <br/> 3. Comment under the Twitter post with the answer, what did the NFT project like"</p>
                    </div>

                    <div className="public-sale step">
                        <img src="./static/images/Balls/Ball5.png" alt="" className="ball-mb ball-mb-5"/>
                        <h4>Public Sale</h4>
                        <p>Public sale of NFTs without discount</p>
                    </div>

                    <div className="post-public-sale step">
                        <img src="./static/images/Balls/Ball6.png" alt="" className="ball-mb ball-mb-6"/>
                        <h4>Post Public Sale</h4>
                        <p>Post Public sale of NFTs without discount</p>
                    </div>

                    <div className="post-sale2 step">
                        <img src="./static/images/Balls/Ball7.png" alt="" className="ball-mb ball-mb-7"/>
                        <h4>Post Sale 2</h4>
                        <p>Post sale 2 of NFTs with a higher value $</p>
                    </div>

                    <div className="post-sale3 step">
                        <img src="./static/images/Balls/Ball8.png" alt="" className="ball-mb ball-mb-8"/>
                        <h4>Post Sale 3</h4>
                        <p>Post sale 3 of NFTs with a higher value $$</p>
                    </div>

                    <div className="post-sale4 step">
                        <img src="./static/images/Balls/Ball9.png" alt="" className="ball-mb ball-mb-9"/>
                        <h4>Post Sale 4</h4>
                        <p>Post sale 4 of NFTs with a higher value $$$</p>
                    </div>

                    <div className="post-sale5 step">
                        <img src="./static/images/Balls/Ball10.png" alt="" className="ball-mb ball-mb-10"/>
                        <h4>Post Sale 5</h4>
                        <p>Post sale 5 of NFTs with a higher value $$$$</p>
                    </div>

                    <div className="secret-sale step">
                        <img src="./static/images/Balls/Ball11.png" alt="" className="ball-mb ball-mb-11"/>
                        <h4>Secret Sale </h4>
                        <p>Secret sale of 3 ultra-rare NFTs $$$$$</p>
                    </div>
                </section>
            </main>

        </> 
    );
};

export default Roadmap;