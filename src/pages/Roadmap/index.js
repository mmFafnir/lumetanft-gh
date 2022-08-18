
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
        if(!classLang) {
            setClassLang(new RoudmapLangs(lang))
        }
        if(classLang) {
            // classLang.changeLang(lang)
        }
    }, [classLang]) 


    return (
        <>
            <Images />
            <main>
            <section class="path">
      <div class="crowdfinding step">
        <img src="images/Balls/Ball0.png" alt="" class="ball-mb ball-mb-0"/>
        <h4>Краудфандинг</h4>
        <p>Привлечение инвестиций с помощью краудфандинговых платформ. Цель 10.000 €</p>
      </div>
      <div class="foundation step">
        <img src="images/Balls/Ball1.png" alt="" class="ball-mb ball-mb-1"/>

        <h4>Фундамент</h4>
        <p>Ранняя продажа NFT для фонда Будды</p>
      </div>

      <div class="gpt step">
        <img src="images/Balls/Ball2.png" alt="" class="ball-mb ball-mb-2"/>
        <h4></h4>
        <div class="give-away">
          <h5>Раздача</h5>
          <p>"Бесплатное распространение NFT при выполнении условий: 1. Подписаться на социальные сети (Twitter, Discord, Instagram) 2. Сделать репост 2 постов из Twitter  3. Прокомментируйте пост в Twitter с ответом на вопрос ""Чем понравился проект NFT SENSAY"""</p>
        </div>
        <div class="partners">
          <h5>Партнёры</h5>
          <p>Бесплатное распространение NFT для рекламы и продвижения проекта</p>
        </div>
        <div class="team">
          <h5>Команда</h5>
          <p>Буфер / резерв для развития команды и проекта</p>
        </div>
      </div>

      <div class="pre-sale step">
        <img src="images/Balls/Ball3.png" alt="" class="ball-mb ball-mb-3"/>
        <h4>Препродажа</h4>
        <p>"Предварительная продажа NFT при выполнении условий: 1. Подпишитесь на социальные сети (Twitter, Discord, Instagram) 2. Сделать репост 2 постов из Twitter  3. Прокомментируйте пост в Twitter с ответом на вопрос ""Чем понравился проект NFT SENSAY""."</p>
      </div>

      <div class="post-pre-sale step">
        <img src="images/Balls/Ball4.png" alt="" class="ball-mb ball-mb-4"/>
        <h4>Пост-препродажа</h4>
        <p>Пост-предпродажа NFT при выполнении условий: 1. Подпишитесь на социальные сети (Twitter, Discord, Instagram) 2. Сделать репост 2 постов из Twitter  3. Прокомментируйте пост в Twitter с ответом на вопрос, ""Чем понравился проект NFT SENSAY""</p>
      </div>

      <div class="public-sale step">
        <img src="images/Balls/Ball5.png" alt="" class="ball-mb ball-mb-5"/>
        <h4>Открытая продажа</h4>
        <p>Публичная продажа NFT без скидки</p>
      </div>

      <div class="post-public-sale step">
        <img src="images/Balls/Ball6.png" alt="" class="ball-mb ball-mb-6"/>
        <h4>Постоткрытая продажа</h4>
        <p>Постпубличная продажа NFT без скидки</p>
      </div>

      <div class="post-sale2 step">
        <img src="images/Balls/Ball7.png" alt="" class="ball-mb ball-mb-7"/>
        <h4>Постпродажа 2</h4>
        <p>Пост продажа 2 NFT с более высокой стоимостью $</p>
      </div>

      <div class="post-sale3 step">
        <img src="images/Balls/Ball8.png" alt="" class="ball-mb ball-mb-8"/>
        <h4>Постпродажа 3</h4>
        <p>Пост продажа 3 NFT с более высокой стоимостью $$</p>
      </div>

      <div class="post-sale4 step">
        <img src="images/Balls/Ball9.png" alt="" class="ball-mb ball-mb-9"/>
        <h4>Постпродажа 4</h4>
        <p>Пост продажа 4 NFT с более высокой стоимостью $$$</p>
      </div>

      <div class="post-sale5 step">
        <img src="images/Balls/Ball10.png" alt="" class="ball-mb ball-mb-10"/>
        <h4>Постпродажа 5</h4>
        <p>Распродажа 5 NFT с более высокой стоимостью $$$$</p>
      </div>

      <div class="secret-sale step">
        <img src="images/Balls/Ball11.png" alt="" class="ball-mb ball-mb-11/"/>
        <h4>Секретная продажа</h4>
        <p>Секретная продажа 3 сверхредких NFT $$$$$</p>
      </div>
    </section>
            </main>

        </> 
    );
};

export default Roadmap;