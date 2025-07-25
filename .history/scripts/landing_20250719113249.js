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
document.getElementById("designStyle").addEventListener("change", updateDesignStyle);
document.getElementById("imageInput").addEventListener("input", dropBackgroundimage);
document.getElementById("addimageInput").addEventListener("input", dropimage);
document.getElementById("imgwidth").addEventListener("input", updateImagewidth);
document.getElementById("imgheight").addEventListener("input", updateImageheight);
document.getElementById("imgborderradius").addEventListener("input", updateImageBorderRadius);
document.getElementById("CTAButtonText").addEventListener("input", updateCTAtext);



function createLandingPage() {
    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedLandingPage"; // So we can update it later
    div.style.width = "100%";
    div.style.minHeight = "400px";
    div.style.backgroundColor = "white";


    const h1 = document.createElement("h1");
    h1.id = "H1"; // So we can update it
    h1.style.textAlign = "center";
    h1.textContent = document.getElementById("Heading").value;

    const pre = document.createElement("pre");
    pre.id = "Pre"; // So we can update it
    pre.style.textAlign = "center";
    pre.textContent = document.getElementById("Text").value;

    const cta = document.createElement("button");
    cta.id = "cta";
    cta.textContent = "Call to Action"; 



    div.appendChild(h1);
    div.appendChild(pre);
    div.appendChild(cta);
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

function dropBackgroundimage() {
    const imageUrl = document.getElementById("imageInput").value;
    const div = document.getElementById("generatedLandingPage");
    const img = document.createElement("img");
    img.id = "BackgroundImage";
    img.style.width = "100%";
    div.style.backgroundImage = `url(${imageUrl})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center";
    div.appendChild(img);

}

function dropimage() {
    const imageUrl = document.getElementById("addimageInput").value;
    const div = document.getElementById("generatedLandingPage");
    const img = document.createElement("img");
    img.id = "ImageToAdd";
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.aspectRatio = "1/1";
    img.style.objectFit = "cover";
    img.src = imageUrl;
    div.appendChild(img);

}

function updateImagewidth() {
    const img = document.getElementById("ImageToAdd");
    if (img) {
        img.style.width = document.getElementById("imgwidth").value + "px";
    }
}
function updateImageheight() {
    const img = document.getElementById("ImageToAdd");
    if (img) {
        img.style.height = document.getElementById("imgheight").value + "px";
    }
}
function updateImageBorderRadius() {
    const img = document.getElementById("ImageToAdd");
    if (img) {
        img.style.borderRadius = document.getElementById("imgborderradius").value+ "px";
    }
}
function updateCTAtext() {
    const cta = document.getElementById("cta");
    if (cta) {
        cta.textContent = document.getElementById("CTAButtonText").value;
    }
}




document.getElementById("CTAButtonBehavior").addEventListener("change", updateCTAInput);

function updateCTAInput() {
    const behavior = document.getElementById("CTAButtonBehavior").value;
    const container = document.getElementById("CTAInputContainer");

    container.innerHTML = ""; // Clear previous input

    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = "text";
    input.style.width = "100%";
    input.style.marginTop = "5px";

    switch (behavior) {
        case "default":
            label.textContent = "Enter a URL:";
            input.placeholder = "https://example.com";
            input.id = "ctaLinkInput";
            break;
        case "Behavior1":
            label.textContent = "Enter a phone number:";
            input.placeholder = "+1234567890";
            input.id = "ctaPhoneInput";
            break;
        case "Behavior2":
            label.textContent = "Enter a WhatsApp message:";
            input.placeholder = "Hi, I’m interested...";
            input.id = "ctaWhatsappInput";
            break;
        default:
            return;
    }

    container.appendChild(label);
    container.appendChild(input);
}

// ✅ Run on first load to show default input
updateCTAInput();





























// Emoji picker functionality
document.addEventListener('DOMContentLoaded', () => {
  const headingTextarea = document.querySelector('#Heading');
  const textTextarea = document.querySelector('#Text');

  const headingPicker = new EmojiButton();
  const textPicker = new EmojiButton();

headingPicker.on('emoji', emoji => {
  insertAtCursor(headingTextarea, emoji.emoji);
  updateHeading(); // 👈 manually update preview
});


textPicker.on('emoji', emoji => {
  insertAtCursor(textTextarea, emoji.emoji);
  updateText(); // 👈 manually update preview
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