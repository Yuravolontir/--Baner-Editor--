import { UsersLandingPages } from './global.js';
import { LandingPage } from './classes.js';
// Importing the EmojiButton library
import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/+esm';



window.addEventListener("DOMContentLoaded", createLandingPage);

//document.getElementById("templates").addEventListener("change", updateLandingPageTemplate);

document.getElementById("Heading").addEventListener('input', updateHeading);

document.getElementById("Text").addEventListener('input', updateText);

document.getElementById("BackgroundColor").addEventListener('input', updateBackgroundColor);

document.getElementById("HeadingColor").addEventListener('input', updateHeadingColor);







function createLandingPage() {
    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedLandingPage"; // So we can update it later
    div.style.width = "100%";
    div.style.minHeight = "600px";
    div.style.backgroundColor = "grey";


    const h1 = document.createElement("h1");
    h1.id = "H1"; // So we can update it
    h1.style.textAlign = "center";
    h1.textContent = document.getElementById("EmailbannerHeading").value;

    const pre = document.createElement("pre");
    pre.id = "EmailbannerPre"; // So we can update it
    pre.style.textAlign = "center";
    pre.textContent = document.getElementById("EmailbannerText").value;

    div.appendChild(h1);
    div.appendChild(pre);

    blank.appendChild(div);


    blank.appendChild(div);
}

// function updateLandingPageTemplate() {
//     if (document.getElementById("templates").value !== "default") {
//         const div = document.getElementById("generatedLandingPage");
//         const template = document.getElementById("templates").value;
//         switch (template) {
//             case "template1":

// }   

 function updateHeading() {
    const heading = document.getElementById("Heading").value;
    const div = document.getElementById("generatedLandingPage");
    div.textContent = heading;
}

function updateText() {
    const text = document.getElementById("Text").value;
    const div = document.getElementById("generatedLandingPage");
    div.textContent = text;
}

function updateBackgroundColor() {
    const color = document.getElementById("BackgroundColor").value;
    const div = document.getElementById("generatedLandingPage");
    div.style.backgroundColor = color;
}

function updateHeadingColor () {
            const h1= document.getElementById("EmailbannerH1");
    if (h1) {
        h1.style.color = document.getElementById("HeadingColor").value;
    }