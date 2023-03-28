"use strict";

window.addEventListener("load", start);

async function start() {
    const characters = await getData();
    characters.forEach(addCharacter);
}

async function getData() {
    const fetchedData = await fetch("https://cederdorff.github.io/dat-js/05-data/southpark.json")
    const data = await fetchedData.json();
    return data;
}


function addCharacter(character) {
    document.querySelector("#characters").insertAdjacentHTML(
        "beforeend", /*html*/
        `
        <article class="grid-item">
            <img src="${character.image}">
            <h3><b>${character.name}</b></h3>  
        </article>
        `
);

document.querySelector("#characters article:last-child").addEventListener("click", clickCharacter);

function clickCharacter() {
        showCharacter(character);
}

}

function showCharacter(character) {
    document.querySelector("#character").showModal();
    document.querySelector("#image").src = character.image
    document.querySelector("#name").textContent = character.name
    document.querySelector("#nickname").textContent = character.nickname
    document.querySelector("#occupation").textContent = character.occupation
    document.querySelector("#age").textContent = character.age
    document.querySelector("#voicedby").textContent = character.voicedBy
    document.querySelector("#gender").textContent = character.gender
    document.querySelector("#religion").textContent = character.religion
    document.querySelector("#catchphrase").textContent = character.catchPhrase
    document.querySelector("#haircolor").textContent = character.hairColor
    document.querySelector("#schoolgrade").textContent = character.schoolGrade
    document.querySelector("#episodes").textContent = character.episodes
    document.querySelector("#appearances").textContent = character.appearances
    document.querySelector("#firstappearance").textContent = character.firstAppearance
}



