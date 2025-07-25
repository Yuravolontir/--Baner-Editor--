import { UsersBanners } from './global.js';
import { Banner } from './classes.js';
// Importing the EmojiButton library
import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/+esm';


document.getElementById("250X250").addEventListener('click', createBanner);
document.getElementById("300X600").addEventListener('click', createBanner);


document.getElementById("bannerHeading").addEventListener('input', updateBannerHeading);

document.getElementById("bannerText").addEventListener('input', updateBannerText);

document.getElementById("BackgroundColor").addEventListener('input', updateBannerColor);

document.getElementById("HeadingColor").addEventListener('input', updateBannerHeadingColor);

document.getElementById("TextColor").addEventListener('input', updateBannerTextColor);

document.getElementById("head-font").addEventListener('input', updateHeadingFont);

document.getElementById("text-font").addEventListener('input', updateTextFont);

document.getElementById("headingFontSize").addEventListener('input', updateHeadingFontSize)

document.getElementById("textFontSize").addEventListener('input', updateTextFontSize);

document.getElementById("designStyle").addEventListener("change", updateDesignStyle);

document.getElementById("saveBanner").addEventListener("click", SaveBanner);

function createBanner(event) {
    event.preventDefault();
    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedBanner"; // So we can update it later

    if (event.target.id === "300X600")  
    {
    div.style.width = "300px";
    div.style.height = "600px";
    }
     if (event.target.id === "250X250") 
    {
     div.style.width = "250px";
     div.style.height = "250px";
    }

    div.style.border = "1px solid black";
    div.style.background = "white";

    const h1 = document.createElement("h1");
    h1.id = "bannerH1"; // So we can update it
    h1.style.textAlign = "center";
    h1.textContent = document.getElementById("bannerHeading").value;

    const pre = document.createElement("pre");
    pre.id = "bannerPre"; // So we can update it
    pre.style.textAlign = "center";
    pre.textContent = document.getElementById("bannerText").value;

    div.appendChild(h1);
    div.appendChild(pre);

    blank.appendChild(div);
}
function updateBannerHeading() {
    const h1 = document.getElementById("bannerH1");
    if (h1) {
        h1.textContent = document.getElementById("bannerHeading").value;
    }
}

function updateBannerText() {
        const pre = document.getElementById("bannerPre");
    if (pre) {
        pre.textContent = document.getElementById("bannerText").value;
    }
}


 function updateBannerColor() {
    const div = document.getElementById("generatedBanner");
    if (div) {
        div.style.backgroundColor = document.getElementById("BackgroundColor").value;
    }
}

 function updateBannerHeadingColor() {
            const h1= document.getElementById("bannerH1");
    if (h1) {
        h1.style.color = document.getElementById("HeadingColor").value;
    }
}

 function updateBannerTextColor() {
        const pre = document.getElementById("bannerPre");
    if (pre) {
        pre.style.color = document.getElementById("TextColor").value;
    }
}

 function updateHeadingFont() {
    const h1 = document.getElementById("bannerH1");
    if (h1) {
        h1.style.fontFamily = document.getElementById("head-font").value;
    }
}
function updateTextFont() {
    const pre = document.getElementById("bannerPre");
    if (pre) {
        pre.style.fontFamily = document.getElementById("text-font").value;
    }
}

 function updateHeadingFontSize() {
    const h1 = document.getElementById("bannerH1");
    if (h1) {
        h1.style.fontSize = document.getElementById("headingFontSize").value + "px";
    }
}
 function updateTextFontSize() {
    const pre = document.getElementById("bannerPre");
    if (pre) {
        pre.style.fontSize = document.getElementById("textFontSize").value + "px";
    }
}
 function updateDesignStyle() {
    const div = document.getElementById("generatedBanner");
    const style = document.getElementById("designStyle").value;

    if (!div) return;

    const heading = document.getElementById("bannerH1");
    const text = document.getElementById("bannerPre");

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

function SaveBanner(event) {
    event.preventDefault(); // Prevent form submission
    const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
    const banner = document.getElementById("generatedBanner");
    if (!banner) {
        alert("Please create a banner first.");
        return;
    }
    let userName = localStorage.getItem('currentUser');
    let width = banner.style.width;
    let height = banner.style.height;
    let hedingtext = document.getElementById("bannerHeading").value;
    let maintext = document.getElementById("bannerText").value;
    let backgroundcolor = document.getElementById("BackgroundColor").value;
    let headingcolor = document.getElementById("HeadingColor").value;
    let textcolor = document.getElementById("TextColor").value;
    let headingfont = document.getElementById("head-font").value;
    let textfont = document.getElementById("text-font").value;
    let headingfontsize = document.getElementById("headingFontSize").value;
    let textfontsize = document.getElementById("textFontSize").value;
    let designstyle = document.getElementById("designStyle").value;

    let bannerObj = new Banner(width, height, hedingtext, maintext, backgroundcolor, headingcolor, textcolor, headingfont, textfont, headingfontsize, textfontsize, designstyle, userName);
    UsersBanners.push(bannerObj);
    
    localStorage.setItem('UsersBanners', JSON.stringify(UsersBanners)); // Save to localStorage
    alert('Banner saved successfully!'); // Alert the user
}



























// Add event listener for the download button
document.getElementById("downloadBanner").addEventListener("click", () => {
    const banner = document.getElementById("generatedBanner");
    if (!banner) return;

    html2canvas(banner).then(canvas => {
        const link = document.createElement("a");
        link.download = "my-banner.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
// Add event listener for the download button



// Emoji picker functionality
document.addEventListener('DOMContentLoaded', () => {
  const headingTextarea = document.querySelector('#bannerHeading');
  const textTextarea = document.querySelector('#bannerText');

  const headingPicker = new EmojiButton();
  const textPicker = new EmojiButton();

  headingPicker.on('emoji', emoji => {
    insertAtCursor(headingTextarea, emoji.emoji);
  });

  textPicker.on('emoji', emoji => {
    insertAtCursor(textTextarea, emoji.emoji);
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