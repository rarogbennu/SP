"use strict";

window.addEventListener("load", start);

async function start() {
    const character = await getCharacter("data/jfk.json");
    showCharacter(character);
}

async function getCharacter(url) {
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

function showCharacter(character) {
    document.querySelector("body").insertAdjacentHTML("beforeend",
    /*html*/`
        <article>
            <h2>${character.name}</h2>
            <img src="${character.image}">
        </article>
    `);
}