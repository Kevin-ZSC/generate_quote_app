const apiUrl = 'https://api.quotable.io/random';
const quote = document.querySelector('blockquote');
const nameA = document.querySelector('span');
const btn = document.querySelector('.newQ');
const displayQ = document.querySelector('.quote-content');

async function getQuote(url){
     const res = await fetch(url);
     let data = await res.json();
     quote.innerHTML = `"${data.content}"`;
     nameA.innerHTML = `--${data.author}`;
}

btn.addEventListener('click',()=>{
    getQuote(apiUrl);
    displayQ.style.display = 'block';
});

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + nameA.innerHTML, "Tweet Window", "width= 600, height= 300")
}
