let quoteElement = document.getElementById("quote");
let authorElement = document.getElementById("author");
let characterImage = document.querySelector("img");
let displayElement = document.querySelector(".quote-container");

async function getQuote(){
  try{
    let response = await fetch("https://officeapi.akashrajpurohit.com/quote/random");
    let data = await response.json();
    
    quoteElement.innerText = data.quote;
    authorElement.innerText = data.character;
    characterImage.src = data.character_avatar_url;
    displayElement.classList.add("display-quote")
  
  }

  catch(error){
    quoteElement.innerText = "They seem a little busy right now";
    console.log(error);
  }
}