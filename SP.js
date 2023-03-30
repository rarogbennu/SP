"use strict";

window.addEventListener("load", start);

async function start() {
    const characters = await getData();
    for (const character of characters)
    {addCharacter(character)}
    // characters.forEach(addCharacter);
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
    // document.querySelector("#episodes").textContent = character.episodes
    // document.querySelector("#appearances").textContent = character.appearances
    // document.querySelector("#firstappearance").textContent = character.firstAppearance

    document.querySelector("#characterepisodes").textContent = characterText(character)
}


function characterText(character) {
    let generalText = `${character.name} first appeared in South Park season ${character.firstAppearance.slice(1,3)} episode ${character.firstAppearance.slice(4,)}. `;
    let specificText = "";
    if (character.appearances == 1) {
        specificText = `${character.name} only appeared this one time.`
    } else if (character.appearances >= 1) {
        specificText = `${character.name} appeared in a total of ${character.appearances} episodes. They are the following: ${character.episodes}`
    } else if (character.appearances == null) {
        specificText = "Jason Null has been here!"
    }  else if (character.appearances == 0) {
        specificText = "Apparently he has zero appearances in the series if Jason is to be trusted!!!"
    }

    let totalDescription = generalText+specificText
    return totalDescription
}
