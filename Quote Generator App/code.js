const apiUrl = "https://api.quotable.io/random";
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author"); 

async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();

    quoteElement.innerHTML = data.content;
    authorElement.innerHTML = data.author;

}

