const quotes = [
    {
        quote: "나는 몽키 D. 루피. 너희를 뛰어넘어......'해적왕'이 될 남자다!!!",
        camefrom: "원피스 99권 -오다 에이치로-"
    },
    {
        quote: "나의 보물? 원한다면 주도록 하지···. 찾아봐, 이 세상의 전부를 거기에 두고 왔으니까.",
        camefrom: "골드 D. 로저 -원피스-"
    },
    {
        quote: "지배같은 거 안해, 이 바다에서 가장 자유로운 녀석이 해적왕이다!!",
        camefrom: "몽키 D. 루피 -원피스-"
    },
    {
        quote: "박제가 되어버린 천재를 아시오?",
        camefrom: "날개 -이상-"
    },
    {
        quote: "Why? Because we fucking can!, Because we fucking can, and if we can, we do",
        camefrom: "Thomas Shelby -Peaky Blinders-"
    },
    {
        quote: "우리는 너무나도 잘 알면서도, 매일매일 우리 자신을 잊어버리기를 원한다.",
        camefrom: "데미안 -헤르만 헤세-"
    },
    {
        quote: "행복한 가정은 모두 비슷한 이유로 행복하지만, 불행한 가정은 저마다의 이유로 불행하다.",
        camefrom: "안나 카레리나 -레프 톨스토이-"
    },
    {
        quote: "빅 브라더가 당신을 지켜보고 있다.",
        camefrom: "1984 -조지 오웰-"
    },
    {
        quote: "남자는 자신이 어떤 사람으로 살아가야 할지 선택해야 하는 순간이 온다.",
        camefrom: "오베라는 남자 -프레드릭 배크만-"
    },
    {
        quote: "어떤 진리로도 사랑하는 것을 잃는 슬픔은 치유할 수는 없다",
        camefrom: "노르웨이의 숲 -무라카미 하루키-"
    },
    {
        quote: "올바른 것은 변하지 않는다, 정말 그렇다.",
        camefrom: "마오리 하카 中"
    },
    {
        quote: "너 자신에게 정직하여라, 내 아들아. 참 많은 생각을 하게 하는구나.",
        camefrom: "마오리 하카 中"
    },
    {
        quote: "어떤 문제가 있느냐, 얼마나 오래 그 문제를 지니고 있었느냐, 아들아, 모든 것이 힘들게 느껴질 때에도, 도저히 해결될 것 같지 않아 보여도, 그 문제의 답은 네 가슴 속에 있단다.",
        camefrom: "마오리 하카 中"
    },
    {
        quote: "오늘, 엄마가 죽었다. 아니, 그게 어제였나. 잘 모르겠다.",
        camefrom: "이방인 -알베르 카뮈-"
    },
    {
        quote: "Call me Ishmael",
        camefrom: "MOBY DICK -HERMAN MELVILLE-"
    },
    {
        quote: "긴 세월에 변하지 않는 그런 사랑은 없겠지만, 그 사랑을 기다려 줄 그러 사람을 찾는거야.",
        camefrom: "Antifreeze -검정치마-"
    },
    {
        quote: "나에게 뭐든 물어봐, 틀린 질문과 괜찮아.",
        camefrom: "틀린질문 -검정치마-"
    },
    {
        quote: "뭘 기대하는지 알아, 어디서 들어봤겠지 먼 별들의 고향, 넌 근데 잚못 온 거야 여긴 춤과 눈물에 순서가 없는 걸.",
        camefrom: "Bollywood -검정치마-"
    },
    {
        quote: "그때는 알 수 없었지요, 왜 나에게 이런 일들이 일어나는지, 어쩌면 저주가 아닐까? 라고도 생각해 봤지만 난 그저 17을 살던 중이였어요.",
        camefrom: "Flying bobs -검정치마-"
    },
    {
        quote: "You're just a man",
        camefrom: "Marcus Aurelius"
    },
    {
        quote: "言葉が深める惑星の夜に今, あなたを探して 答えた「心枯れるまで、共に笑っていよう」",
        camefrom: "恋風邪にのせて -VAUNDY-"
    },
    {
        quote: "重なるひびを僕達は, 流るるひびも僕達は 思い出すこともなくなってしまうんだろう",
        camefrom: "しわをあわせ -VAUNDY-"
    },
    {
        quote: "もう止めにしようかなんて思うんだ でも, 君の笑顔や仕草がまたほら、癖になってんだ",
        camefrom: "東京フラッシュ -VAUNDY-"
    }
]
const doc_quote = document.querySelector("#quote"); 
const doc_camefrom = document.querySelector("#camefrom"); 
const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];
doc_quote.textContent = `"${todaysQuote.quote}"`;
doc_camefrom.textContent = todaysQuote.camefrom;