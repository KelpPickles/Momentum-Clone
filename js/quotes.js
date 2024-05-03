const quotes = [
    {text : '마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.',
    author : '이소룡'},
    {text : '삶이 있는 한 희망은 있다.',
    author : '키케로'},
    {text : '산다는 것 그것은 치열한 전투이다.',
    author : '로망로랑'},
    {text : '언제나 현재에 집중할 수 있다면 행복할 것이다.',
    author : '파울로 코엘료'},
    {text : '신은 용기있는 자를 결고 버리지 않는다.',
    author : '켄러'},
    {text : '신은 주사위 놀이를 하지 않는다.',
    author : '알베르트 아인슈타인'},
    {text : '작은 기회로 부터 종종 위대한 업적이 시작된다.',
    author : '데모스테네스'},
    {text : '최고에 도달하려면 최저에서 시작하라.',
    author : 'P.시루스'},
    {text : '내 비장의 무기는 아직 손 안에 있다. 그것은 희망이다.',
    author : '나폴레옹'},
];

const QT = document.getElementById('text');
const QA = document.getElementById('author');

function setQuotes() {
    const indexNum = parseInt((Math.random()*10) % (quotes.length - 1));
    if(quotes[indexNum] != undefined) {
        QT.textContent = quotes[indexNum].text;
        QA.textContent = quotes[indexNum].author;
    }
    else{
        setQuotes();
    }
}

setQuotes();



