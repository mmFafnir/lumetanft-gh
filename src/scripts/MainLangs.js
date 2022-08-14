import { Langs } from "./Langs";




export class MainLangs extends Langs {
    wallet = document.querySelector('.wallet-top');

    findBuddaTitle = document.querySelector('.find-budda-title');
    benefitTitle = document.querySelector('.benefit-title');
    benefit1 = document.querySelector('.benefit1');
    benefit2 = document.querySelector('.benefit2');
    benefit3 = document.querySelector('.benefit3');
    benefit4 = document.querySelector('.benefit4');

    ecoTitle = document.querySelector('.eco-title');

    findBuddaBody = document.querySelector('.find-budda-body');
    // buddaVideoTitle = document.querySelector('.budda-video-title');
    companyBlock = document.querySelector('.company-block');
    companyBlock2 = document.querySelector('.company-block2');
    ecoBlock = document.querySelector('.eco-block');
    ecoBlock2 = document.querySelector('.eco-block2');
    
    
    
    constructor(lang){
        super(lang)
        this.changeLang(lang)
        
    }    
    changeLang(lang) {
        super.changeLang(lang)
    }
    updateElements() {
    }

    rus() {
        try {
            this.wallet.innerHTML = "ПОДКЛЮЧИТЬ <br> КОШЕЛЁК";
            
            this.findBuddaTitle.textContent = "НАЙДИ СВОЕГО БУДДУ!";
            this.benefitTitle.textContent = "ПРЕИМУЩЕСТВА";
            this.benefit1.textContent = "Пассивный доход в виде нативных токенов";
            this.benefit2.textContent = "Участие в обсуждениях и голосовании по развитию проекта";
            this.benefit3.textContent = "Участие в розыгрыше NFT/нативных токенов";
            this.benefit4.textContent = "Пассивный доход в виде нативных токенов";
            this.ecoTitle.textContent = "ЭКОСИСТЕМА";
            
            this.findBuddaBody.innerHTML = "Вместе повышайте ценность своих коллекций <br> Присоединяйтесь к нашему сообществу NFT прямо сейчас!";
            // this.buddaVideoTitle.textContent = "Алмазный король";
            this.companyBlock.textContent = "SENSAY — это коллекция из 10 000 уникальных NFT Будд, которая является частью нечто большего!";
            this.companyBlock2.textContent = "Владение NFT открывает доступ к клубу освещенных, а также к пассивному заработку в перспективе. Будущие привилегии будут открываться сообществом по мере развития дорожной карты.";
            this.ecoBlock.textContent = "Наш NFT проект является неотбемлемой частью большой и взаимодействующей экосистемы, экосистемы Lumeta. Каждый последующий проект связывается с предыдущим путем внедрения платежных систем в виде токена и собственной криптовалюты на основе блокчейн технологий.";
            this.ecoBlock2.textContent = "Вишенкой на торте выступает полная интеграция всех вышеперечисленных проектов в собственную метавселенную с инновационными технологиями и возможностями для каждого из нас.";

            
        } catch (error) {
            console.log(
                this.wallet,
                this.findBuddaTitle,
                this.benefitTitle,
                this.benefit1,
                this.benefit2,
                this.benefit3,
                this.benefit4,
                this.ecoTitle,
                this.findBuddaBody,
                this.buddaVideoTitle,
                this.companyBlock,
                this.companyBlock2,
                this.ecoBlock,
                this.ecoBlock2,
            )            
        }    
    }

    eng() {
        this.wallet.innerHTML = "CONNECT <br> WALLET";

        this.findBuddaTitle.textContent = "FIND YOUR BUDDA!";
        this.benefitTitle.textContent = "BENEFITS";
        this.benefit1.textContent = "Passive income in the form of native tokens";
        this.benefit2.textContent = "Participation in discussions and voting on project development";
        this.benefit3.textContent = "Participation in lottery of NFT / native tokens";
        this.benefit4.textContent = "Joining the illuminated club on Discord";
        this.ecoTitle.textContent = "ECOSYSTEM";

        this.findBuddaBody.innerHTML = "Add value to your collections together <br> with. Join our NFT community right now!";
        // this.buddaVideoTitle.textContent = "The diamond king";
        this.companyBlock.textContent = "The SENSAY is a collection of 10,000 unique NFT Buddhas that are part of something bigger!";
        this.companyBlock2.textContent = "Owning an NFT opens up access to the illuminated club as well as passive income in the horizon. Future privileges will be unlocked by the community as the roadmap progresses";
        this.ecoBlock.textContent = "Our NFT project is an integral part of a large and interacting ecosystem, the Lumeta ecosystem. Each successive project connects to the previous one by introducing payment systems in the form of a token and its own cryptocurrency based on blockchain technology";
        this.ecoBlock2.textContent = "The cherry on the cake is the full integration of all of the above projects into our own metaverse with innovative technologies and opportunities for each of us";
    }

    aze() {
        this.wallet.innerHTML = "ربط المحفظة";

        this.findBuddaTitle.textContent = "ابحث عن صديقك!";
        this.benefitTitle.textContent = "ابحث عن صديقك!";
        this.benefit1.textContent = "الدخل السلبي في شكل رموز أصلية";
        this.benefit2.textContent = "المشاركة في المناقشات والتصويت على تطوير المشروع";
        this.benefit3.textContent = "المشاركة في يانصيب NFT / الرموز الأصلية";
        this.benefit4.textContent = "الانضمام إلى النادي المضيء على ديسكورد";
        this.ecoTitle.textContent = "النظام البيئي";

        this.findBuddaBody.innerHTML = "أضف قيمة إلى مجموعاتك معًا <br> مع. انضم إلى مجتمع NFT الآن!";
        // this.buddaVideoTitle.textContent = "ملك الماس";
        this.companyBlock.textContent = "SENSAY عبارة عن مجموعة من 10000 تماثيل NFT فريدة من نوعها هي جزء من شيء أكبر!";
        this.companyBlock2.textContent = "إن امتلاك NFT يفتح الوصول إلى النادي المضيء بالإضافة إلى الدخل السلبي في الأفق. سيتم فتح الامتيازات المستقبلية من قبل المجتمع مع تقدم خارطة الطريق";
        this.ecoBlock.textContent = "يعد مشروع NFT الخاص بنا جزءًا لا يتجزأ من نظام بيئي كبير ومتفاعل ، وهو نظام Lumeta البيئي. يرتبط كل مشروع متتالي بالمشروع السابق من خلال إدخال أنظمة الدفع في شكل رمز مميز وعملة مشفرة خاصة به تعتمد على تقنية blockchain";
        this.ecoBlock2.textContent = "الكرز على الكعكة هو التكامل الكامل لجميع المشاريع المذكورة أعلاه في metaverse الخاص بنا مع التقنيات والفرص المبتكرة لكل واحد منا";

    }

    chn() {
        this.wallet.innerHTML = "連接錢包";

        this.findBuddaTitle.textContent = "找到你的佛！";
        this.benefitTitle.textContent = "好處";
        this.benefit1.textContent = "本地代幣形式的被動收入";
        this.benefit2.textContent = "參與項目開發的討論和投票";
        this.benefit3.textContent = "參與抽獎 NFT / 原生代幣";
        this.benefit4.textContent = "加入 Discord 上的發光俱樂部";
        this.ecoTitle.textContent = "生態系統";

        this.findBuddaBody.innerHTML = "一起為您的收藏增加價值 和。 <br> 立即加入我們的 NFT 社區！";
        // this.buddaVideoTitle.textContent = "鑽石王";
        this.companyBlock.textContent = "SENSAY 是 10,000 个独特的 NFT 佛像的集合，它们是更大事物的一部分！";
        this.companyBlock2.textContent = " 拥有 NFT 可以打开照明俱乐部以及地平线上的被动收入。 随着路线图的进展，社区将解锁未来的特权。";
        this.ecoBlock.textContent = "我們的 NFT 項目是大型互動生態系統 Lumeta 生態系統的組成部分。每個後續項目都通過引入代幣形式的支付系統和基於區塊鏈技術的自己的加密貨幣來連接前一個項目";
        this.ecoBlock2.textContent = "蛋糕上的櫻桃是將上述所有項目完全整合到我們自己的虛擬世界中，為我們每個人提供創新技術和機會";
    }

    ind() {
        this.wallet.innerHTML = "वॉलेट कनेक्ट करें";

        this.findBuddaTitle.textContent = "अपना बुद्ध खोजें!";
        this.benefitTitle.textContent = "फ़ायदे";
        this.benefit1.textContent = "देशी टोकन के रूप में निष्क्रिय आय";
        this.benefit2.textContent = "परियोजना विकास पर चर्चा और मतदान में भागीदारी";
        this.benefit3.textContent = "एनएफटी / देशी टोकन की लॉटरी में भागीदारी";
        this.benefit4.textContent = "डिस्कॉर्ड पर प्रबुद्ध क्लब में शामिल होना";
        this.ecoTitle.textContent = "पारिस्थितिकी तंत्र";

        this.findBuddaBody.innerHTML = "अपने संग्रह में एक साथ मूल्य जोड़ें <br> साथ। अभी हमारे NFT समुदाय में शामिल हों!";
        // this.buddaVideoTitle.textContent = "हीरा राजा";
        this.companyBlock.textContent = "SENSAY 10,000 अद्वितीय NFT बुद्धों का एक संग्रह है जो किसी बड़ी चीज़ का हिस्सा हैं!";
        this.companyBlock2.textContent = "एनएफटी पर अधिकार होने से प्रबुद्ध क्लब तक पहुँच के साथ-साथ क्षितिज में निष्क्रिय आय भी होती है। रोडमैप के आगे बढ़ने पर समुदाय द्वारा भविष्य के विशेषाधिकारों को अनलॉक किया जाएगा।";
        this.ecoBlock.textContent = "हमारी एनएफटी परियोजना लुमेटा पारिस्थितिकी तंत्र, एक बड़े और अंतःक्रियात्मक पारिस्थितिकी तंत्र का एक अभिन्न अंग है। प्रत्येक क्रमिक परियोजना एक टोकन के रूप में भुगतान प्रणाली की शुरुआत करके और ब्लॉकचेन तकनीक पर आधारित अपनी स्वयं की क्रिप्टोकरेंसी पेश करके पिछले एक से जुड़ती है।";
        this.ecoBlock2.textContent = "केक पर चेरी हम में से प्रत्येक के लिए नवीन तकनीकों और अवसरों के साथ हमारे अपने मेटावर्स में उपरोक्त सभी परियोजनाओं का पूर्ण एकीकरण है";
        
    }

}