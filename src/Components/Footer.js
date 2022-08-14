import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="flex-ft">
                    <div class="logo-bt"><img src="./static/images/logo-bt.svg" /></div>
                    <div class="copyright"><span>©</span> 2022 LUMETA</div>
                    </div>

                    <div class="flex-ft">
                    <div class="bt-info">
                        DISCOVER NFTS BY LUmETA, TRACK THE LATEST DROPS, AND FOLLOW THE COLLECTIONS!
                    </div>
                
                    <a href="#" class="politic">ALL RIGHTS RESERVED. <span>2022 </span></a>
                </div>
            </div>

            {/* <style>
                header .container:before{
                    background: none;
                }
            </style> */}
    </footer>
    );
};

export default Footer;