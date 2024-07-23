const apiUrl = "https://api.quotable.io/random";
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author"); 

async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();

    quoteElement.innerHTML = data.content;
    authorElement.innerHTML = data.author;
}

function post(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteElement.innerHTML +
         "%0Aby " + authorElement.innerHTML
        ,"post window", "width=600,height=300");
}

getQuote(apiUrl);
