import React, { useState } from 'react';

const buddas = [
    {
        index: 1,
        class: 'original-budda',
        src: './static/images/Budda1.png'
    },
    {
        index: 2,
        class: 'crystall-budda',
        src: './static/images/Crystall-Budda.png'
    },
    {
        index: 3,
        class: 'emerald-budda',
        src: './static/images/emerald-budda.png'
    },

]
const BuddaSlider = () => {

    const [buddaIndex, setBuddaIndex] = useState(0);
    
    const slideChangeHandler = () => {
    console.log(buddaIndex)
        if(buddaIndex === buddas.length - 1) {
            setBuddaIndex(0);
            return;
        }
        setBuddaIndex(prev => prev+1)
    }


    return (
        <div class="budda-top" >
          <img class="bg" src="./static/images/budda-top.png" />
          <img class="yin" src="./static/images/Yin.png" />
          <img class="yang" src="./static/images/Yang.png"  />
          <div
            onMouseEnter={slideChangeHandler} 
            className='budda-slider'
          >
            {
                buddas.map((budda, index) => (
                    <img 
                        key={index} 
                        className={budda.class} 
                        src={budda.src} 
                        alt="budda" 
                        style={{display: index === buddaIndex ? 'block' : 'none'}}
                    />
                ))
            }
          </div>
        </div>
    );
};

export default BuddaSlider;