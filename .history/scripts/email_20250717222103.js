
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
document.getElementById("designStyle").addEventListener("change", updateEmailDesignStyle);
document.getElementById("saveemail").addEventListener("click", SaveEmailBanner);
document.getElementById("imageInput").addEventListener("input", dropEmailimage);



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

 function updateEmailDesignStyle() {
    const div = document.getElementById("generatedEmailBanner");
    const style = document.getElementById("designStyle").value;

    if (!div) return;

    const heading = document.getElementById("EmailbannerH1");
    const text = document.getElementById("EmailbannerPre");

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

function dropEmailimage() {
    const imageUrl = document.getElementById("imageInput").value;
    const div = document.getElementById("generatedEmailBanner");
    const img = document.createElement("img");
    div.style.backgroundImage = `url(${imageUrl})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center";
    div.appendChild(img);

}

function SaveEmailBanner(event) {
    event.preventDefault(); // Prevent form submission

    const banner = document.getElementById("generatedEmailBanner");
    if (!banner) {
        alert("Please create a banner first.");
        return;
    }

    let username = localStorage.getItem('currentUser');
    let width = banner.style.width;
    let height = banner.style.height;
    let hedingtext = document.getElementById("EmailbannerHeading").value;
    let maintext = document.getElementById("EmailbannerText").value;
    let backgroundcolor = document.getElementById("BackgroundColor").value;
    let headingcolor = document.getElementById("HeadingColor").value;
    let textcolor = document.getElementById("TextColor").value;
    let headingfont = document.getElementById("head-font").value;
    let textfont = document.getElementById("text-font").value;
    let headingfontsize = document.getElementById("headingFontSize").value;
    let textfontsize = document.getElementById("textFontSize").value;
    let designstyle = document.getElementById("designStyle").value;
    let image = document.getElementById("imageInput").value;

    let newEmailBanner = new emailBanner(width, height, hedingtext, maintext, backgroundcolor, headingcolor, textcolor, headingfont, textfont, headingfontsize, textfontsize, designstyle, image, username);

    let storedEmailBanners = JSON.parse(localStorage.getItem('UsersEmailBanners')) || [];
    storedEmailBanners.push(newEmailBanner);
    localStorage.setItem('UsersEmailBanners', JSON.stringify(storedEmailBanners));

    alert('Banner saved successfully!');
}























// Emoji picker functionality
document.addEventListener('DOMContentLoaded', () => {
  const headingTextarea = document.querySelector('#EmailbannerHeading');
  const textTextarea = document.querySelector('#EmailbannerText');

  const headingPicker = new EmojiButton();
  const textPicker = new EmojiButton();

headingPicker.on('emoji', emoji => {
  insertAtCursor(headingTextarea, emoji.emoji);
  updateEmailBannerHeading(); // 👈 manually update preview
});


textPicker.on('emoji', emoji => {
  insertAtCursor(textTextarea, emoji.emoji);
  updateEmailBannerText(); // 👈 manually update preview
});


  document.querySelector('#emojiHeading').addEventListener('click', () => {
    headingPicker.togglePicker(document.querySelector('#emojiHeading'));
  });

  document.querySelector('#emojiText').addEventListener('click', () => {
    textPicker.togglePicker(document.querySelector('#emojiText'));
  });

  function insertAtCursor(textarea, emojiChar) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    textarea.value = before + emojiChar + after;
    textarea.selectionStart = textarea.selectionEnd = start + emojiChar.length;
    textarea.focus();
  }
});

// Emoji picker functionality