"use strict";
const gameOfThronesApi = 'https://thronesapi.com/api/v2/Characters';
let GOTCharacter;

async function fetchGameOfThronesApi(url) {
    const response = await fetch(url);
    // waits until the request completes...
    const GOTCharacters = await response.json();
    //get a random character
    GOTCharacter = GOTCharacters[Math.floor(Math.random() * GOTCharacters.length)];
    renderCharacter(GOTCharacter);
}
fetchGameOfThronesApi(gameOfThronesApi)
//render data
function renderCharacter(GOTCharacter) {
    const title = document.querySelector('#characterName');
    // console.log('renderMovie', movie)
    title.innerHTML = GOTCharacter.title;
    // title.style.color = white;
    const image = document.getElementById('character__img');
    image.src = GOTCharacter.imageUrl;
    const desc = document.getElementById('character_family');
    desc.innerHTML = GOTCharacter.family;
};

const refresh = document.getElementById('refresh')
refresh.addEventListener("click", nextPage());
function nextPage() {
    // fetch data
    fetchGameOfThronesApi(gameOfThronesApi);
}
