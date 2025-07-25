
import { UsersEmailBanners } from './global.js';
import { emailBanner } from './classes.js';
// Importing the EmojiButton library
import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/+esm';


window.addEventListener("DOMContentLoaded", createEmailBanner);
document.getElementById("EmailbannerHeading").addEventListener('input', updateEmailBannerHeading);
document.getElementById("EmailbannerText").addEventListener('input', updateEmailBannerText);
document.getElementById("BackgroundColor").addEventListener('input', updateEmailBannerColor);
document.getElementById("HeadingColor").addEventListener('input', updateEmailBannerHeadingColor);
document.getElementById("TextColor").addEventListener('input', updateEmailBannerTextColor);
document.getElementById("head-font").addEventListener('input', updateEmailHeadingFont);
document.getElementById("text-font").addEventListener('input', updateEmailTextFont);

document.getElementById("headingFontSize").addEventListener('input', updateEmailHeadingFontSize)

document.getElementById("textFontSize").addEventListener('input', updateEmailTextFontSize);

document.getElementById("designStyle").addEventListener("change", updateDesignStyle);

document.getElementById("saveBanner").addEventListener("click", SaveBanner);
function createEmailBanner() {
    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedEmailBanner"; // So we can update it later
    div.style.width = "650px";
    div.style.minHeight = "400px";
    div.style.border = "1px solid black";
    div.style.background = "white";

    const h1 = document.createElement("h1");
    h1.id = "EmailbannerH1"; // So we can update it
    h1.style.textAlign = "center";
    h1.textContent = document.getElementById("EmailbannerHeading").value;

    const pre = document.createElement("pre");
    pre.id = "EmailbannerPre"; // So we can update it
    pre.style.textAlign = "center";
    pre.textContent = document.getElementById("EmailbannerText").value;

    div.appendChild(h1);
    div.appendChild(pre);

    blank.appendChild(div);
}

function updateEmailBannerHeading() {
    const h1 = document.getElementById("EmailbannerH1");
    if (h1) {
        h1.textContent = document.getElementById("EmailbannerHeading").value;
    }
}

function updateEmailBannerText() {
        const pre = document.getElementById("EmailbannerPre");
    if (pre) {
        pre.textContent = document.getElementById("EmailbannerText").value;
    }
}
 function updateEmailBannerColor() {
    const div = document.getElementById("generatedEmailBanner");
    if (div) {
        div.style.backgroundColor = document.getElementById("BackgroundColor").value;
    }
}

 function updateEmailBannerHeadingColor() {
            const h1= document.getElementById("EmailbannerH1");
    if (h1) {
        h1.style.color = document.getElementById("HeadingColor").value;
    }
}

 function updateEmailBannerTextColor() {
        const pre = document.getElementById("EmailbannerPre");
    if (pre) {
        pre.style.color = document.getElementById("TextColor").value;
    }
}

 function updateEmailHeadingFont() {
    const h1 = document.getElementById("EmailbannerH1");
    if (h1) {
        h1.style.fontFamily = document.getElementById("head-font").value;
    }
}
function updateEmailTextFont() {
    const pre = document.getElementById("EmailbannerPre");
    if (pre) {
        pre.style.fontFamily = document.getElementById("text-font").value;
    }
}

 function updateEmailHeadingFontSize() {
    const h1 = document.getElementById("EmailbannerH1");
    if (h1) {
        h1.style.fontSize = document.getElementById("headingFontSize").value + "px";
    }
}
 function updateEmailTextFontSize() {
    const pre = document.getElementById("EmailbannerPre");
    if (pre) {
        pre.style.fontSize = document.getElementById("textFontSize").value + "px";
    }
}