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

document.getElementById("TextColor").addEventListener('input', updateTextColor);

document.getElementById("head-font").addEventListener('input', updateHeadingFont);

document.getElementById("text-font").addEventListener('input', updateTextFont);

document.getElementById("headingFontSize").addEventListener('input', updateHeadingFontSize)

document.getElementById("textFontSize").addEventListener('input', updateTextFontSize);



function createLandingPage() {
    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedLandingPage"; // So we can update it later
    div.style.width = "100%";
    div.style.minHeight = "400px";
    div.style.backgroundColor = "grey";


    const h1 = document.createElement("h1");
    h1.id = "H1"; // So we can update it
    h1.style.textAlign = "center";
    h1.textContent = document.getElementById("Heading").value;

    const pre = document.createElement("pre");
    pre.id = "Pre"; // So we can update it
    pre.style.textAlign = "center";
    pre.textContent = document.getElementById("Text").value;

    div.appendChild(h1);
    div.appendChild(pre);

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
    const h1 = document.getElementById("H1");
    if (h1) {
        h1.textContent = document.getElementById("Heading").value;
    }
}

function updateText() {
        const pre = document.getElementById("Pre");
    if (pre) {
        pre.textContent = document.getElementById("Text").value;
    }
}

function updateBackgroundColor() {
    const color = document.getElementById("BackgroundColor").value;
    const div = document.getElementById("generatedLandingPage");
    div.style.backgroundColor = color;
}

function updateHeadingColor () {
    const h1= document.getElementById("H1");
    if (h1) {
        h1.style.color = document.getElementById("HeadingColor").value;
    }
}

 function updateTextColor() {
        const pre = document.getElementById("Pre");
    if (pre) {
        pre.style.color = document.getElementById("TextColor").value;
    }
}

 function updateHeadingFont() {
    const h1 = document.getElementById("H1");
    if (h1) {
        h1.style.fontFamily = document.getElementById("head-font").value;
    }
}
function updateTextFont() {
    const pre = document.getElementById("Pre");
    if (pre) {
        pre.style.fontFamily = document.getElementById("text-font").value;
    }
}

 function updateHeadingFontSize() {
    const h1 = document.getElementById("H1");
    if (h1) {
        h1.style.fontSize = document.getElementById("headingFontSize").value + "px";
    }
}
 function updateTextFontSize() {
    const pre = document.getElementById("Pre");
    if (pre) {
        pre.style.fontSize = document.getElementById("textFontSize").value + "px";
    }
}

 function updateDesignStyle() {
    const div = document.getElementById("generatedLandingPage");
    const style = document.getElementById("designStyle").value;

    if (!div) return;

    const heading = document.getElementById("H1");
    const text = document.getElementById("Pre");

    // Reset
    div.style.border = "";
    div.style.background = "";
    div.style.color = "";
    div.style.fontFamily = "";

    switch (style) {
        case "gradient1":
            document.getElementById("BackgroundColor").value= null;
            div.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
            
            break;

        case "gradient2":
            document.getElementById("BackgroundColor").value= null;
            div.style.background = "linear-gradient(135deg, #ff6b6b, #6a00f4)";
            break;

        case "gradient3":
            document.getElementById("BackgroundColor").value= null;
            div.style.background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
            break;
    }

    // Heading should match too
    if (heading) {
        heading.style.color = document.getElementById("HeadingColor").value;
        heading.style.fontFamily = document.getElementById("head-font").value;
        heading.style.fontSize = document.getElementById("headingFontSize").value + "px";
    }

    if (text) {
        text.style.color = document.getElementById("TextColor").value;
        text.style.fontFamily = document.getElementById("text-font").value;
        text.style.fontSize = document.getElementById("textFontSize").value + "px";
    }
}