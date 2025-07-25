import { UsersLandingPages } from './global.js';
import { LandingPage } from './classes.js';
// Importing the EmojiButton library
import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/+esm';



window.addEventListener("DOMContentLoaded", createLandingPage);


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
document.getElementById("CTAButtonBehavior").addEventListener("change", updateCTAInput);
document.getElementById("CTAColor").addEventListener('input', updateCTAColor);
document.getElementById("CTAColor").addEventListener('input', updateCTAColor);

//document.getElementById("cta").addEventListener("click", CTAfunctionality);
document.getElementById("templates").addEventListener("change", updateLandingPageTemplate);
document.getElementById("leadFormToggle").addEventListener("change", updateLeadFormToggle);
document.getElementById("saveLanding").addEventListener("click", SaveLandingPage);

let forimgflag = false;


function createLandingPage() {
    forimgflag = false;

    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedLandingPage"; // So we can update it later
    div.style.width = "100%";
    div.style.minHeight = "400px";
    div.style.backgroundColor = "white";   
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.padding = "20px";

    const h1 = document.createElement("h1");
    h1.id = "H1"; // So we can update it
    h1.style.textAlign = "center";
    h1.textContent = document.getElementById("Heading").value || "Welcome to Your Landing Page";

    const pre = document.createElement("pre");
    pre.id = "Pre"; // So we can update it
    pre.style.textAlign = "center";
    pre.textContent = document.getElementById("Text").value || "Your landing page text goes here.";

    const cta = document.createElement("button");
    cta.id = "cta";
    cta.textContent = "Call to Action"; 
    cta.style.padding = "12px 24px";
    cta.style.border = "none";
    cta.style.borderRadius = "6px";
    cta.style.cursor = "pointer";
    cta.style.marginTop = "16px";

    div.appendChild(h1);
    div.appendChild(pre);
    div.appendChild(cta);
    blank.appendChild(div); 
    dropimage();
}

 

 function updateHeading() {
    const h1 = document.getElementById("H1");
    if (h1) {
        h1.textContent = document.getElementById("Heading").value|| "Welcome to Your Landing Page";
    }
}

function updateText() {
        const pre = document.getElementById("Pre");
    if (pre) {
        pre.textContent = document.getElementById("Text").value|| "Your landing page text goes here.";
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

    if (document.getElementById("BackgroundImage"))
    {
            div.style.backgroundImage = "";
            div.style.backgroundColor = "white";

    const existedIMG = document.getElementById("BackgroundImage");
    existedIMG.id = "BackgroundImage";
    existedIMG.style.width = "100%";
    existedIMG.style.backgroundImage = `url(${imageUrl})`;
    existedIMG.style.backgroundSize = "cover";
    existedIMG.style.backgroundRepeat = "no-repeat";
    existedIMG.style.backgroundPosition = "center";
    }
    if (!imageUrl) {
        // If input is empty, remove the image if it exists
        if (document.getElementById("BackgroundImage")) {
            while ( document.getElementById("BackgroundImage"))
            {
            document.getElementById("BackgroundImage").remove();
            }
        }
        return;
    }
    else{
    img.id = "BackgroundImage";
    img.style.width = "100%";
    div.style.backgroundImage = `url(${imageUrl})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center";
    div.appendChild(img);
    }
}

function dropimage() {
    const imageUrl = document.getElementById("addimageInput").value;
    const div = document.getElementById("generatedLandingPage");
    const img = document.createElement("img");
    if (document.getElementById("ImageToAdd"))
    {
         while ( document.getElementById("ImageToAdd"))
            {
            document.getElementById("ImageToAdd").remove();
            }

    }
    else if (!imageUrl) {
        // If input is empty, remove the image if it exists
        if (document.getElementById("ImageToAdd")) {
            while ( document.getElementById("ImageToAdd"))
            {
            document.getElementById("ImageToAdd").remove();
            }
        }
        return;
    }
     else if (forimgflag)
     {
        updateLandingPageTemplate();
     }
        else {
    updateImagewidth();
    updateImageheight();
    updateImageBorderRadius();
    img.id = "ImageToAdd";
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.aspectRatio = "1/1";
    img.style.objectFit = "cover";
    img.style.margin = "3vh";

    img.src = imageUrl;
    div.appendChild(img);
    }
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

function updateCTAInput() {
    const behavior = document.getElementById("CTAButtonBehavior").value;
    const container = document.getElementById("CTAInputContainer");

    container.innerHTML = ""; // Clear previous input

    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = "text";


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
            label.textContent = "Enter a WhatsApp number:";
            input.placeholder = "+1234567890";
            input.id = "ctaWhatsappInput";
            break;
        default:
            return;
    }

    container.appendChild(label);
    container.appendChild(input);
}
updateCTAInput();

function updateCTAColor(){
    const button = document.getElementById("cta");
    if (button) {
        button.style.backgroundColor = document.getElementById("CTAColor").value;
    }
updateLeadFormToggle();
}
// function CTAfunctionality() {
//     const behavior = document.getElementById("CTAButtonBehavior").value;
//     const linkInput = document.getElementById("ctaLinkInput");
//     const phoneInput = document.getElementById("ctaPhoneInput");
//     const whatsappInput = document.getElementById("ctaWhatsappInput");
//     const button = document.getElementById("cta");

//     switch (behavior) {
//         case "default":
//             button.href = linkInput.value;
//             break;
//         case "Behavior1":
//             button.href = "tel:" + phoneInput.value;
//             break;
//         case "Behavior2":
//             button.href = "https://api.whatsapp.com/send?phone=" + whatsappInput.value;
//             break;
//         default:
//             return;
//     }
// }


function updateLandingPageTemplate() {
    const selectedTemplate = document.getElementById("templates").value;
    const preview = document.getElementById("preview");

    // Clear previous content
    preview.innerHTML = "";

    // Base structure
    const div = document.createElement("div");
    div.id = "generatedLandingPage";
    div.style.width = "100%";
    div.style.minHeight = "400px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.padding = "20px";
    div.style.borderRadius = "12px";
    div.style.boxShadow = "0 0 20px rgba(0,0,0,0.1)";

    const h1 = document.createElement("h1");
    h1.id = "H1";
    h1.textContent = document.getElementById("Heading").value || "Welcome to Your Landing Page";
    h1.style.textAlign = "center";

    const pre = document.createElement("pre");
    pre.id = "Pre";
    pre.textContent = document.getElementById("Text").value || "Your landing page text goes here.";
    pre.style.textAlign = "center";
    pre.style.whiteSpace = "pre-wrap";

    const cta = document.createElement("button");
    cta.id = "cta";
    cta.textContent = document.getElementById("CTAButtonText").value || "Call to Action";
    cta.style.padding = "12px 24px";
    cta.style.border = "none";
    cta.style.borderRadius = "6px";
    cta.style.cursor = "pointer";
    cta.style.marginTop = "16px";

    
    const img = document.createElement("img");
    img.id = "ImageToAdd";
    img.src = document.getElementById("addimageInput").value ||  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiVTtmHy1IPxGhMuuoxwWz-kjqEkyi8Vc-w&s";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";
    img.style.marginTop = "16px";
    img.style.width = "200px";
    img.style.height = "200px";

    // Apply styles based on template
    switch (selectedTemplate) {
        case "template1": // Clean & white
                     forimgflag = true;


                div.appendChild(h1);
                div.appendChild(pre);
                div.appendChild(img);
                div.appendChild(cta);
                preview.appendChild(div);
            break;
        case "template2": // Gradient dark
                     forimgflag = true;


                div.appendChild(h1);
                div.appendChild(img);
                div.appendChild(pre);
                div.appendChild(cta);
                preview.appendChild(div);
            break;
        case "template3": // Peach vibes
             forimgflag = true;


                div.appendChild(img);
                div.appendChild(cta);
                div.appendChild(h1);
                div.appendChild(pre);
                preview.appendChild(div);
            break;
        case "default":
        default:
            createLandingPage(); // fallback to manual input
            
            return;
    }

    updateHeading();
    updateText();
    updateBackgroundColor();
    updateHeadingColor();
    updateTextColor();
    updateHeadingFont();
    updateTextFont();
    updateHeadingFontSize();
    updateTextFontSize();
    updateCTAtext();
    updateImagewidth();
    updateImageheight();
    updateImageBorderRadius();
    dropBackgroundimage();
    updateLeadFormToggle();
    updateCTAInput();
}

function updateLeadFormToggle() {
    const leadForm = document.getElementById("leadFormToggle").value;
    const leadFormContainer = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "Submit";
    button.id = "submitLeadForm";
    button.style.padding = "12px 24px";
    if (document.getElementById("CTAColor").value != "#000000" )
    {  
    button.style.backgroundColor = document.getElementById("CTAColor").value ;
    }
    leadFormContainer.id = "leadFormContainer";
    leadFormContainer.style.display = "none";

    if(!document.getElementById("leadFormContainer"))
    {
    switch(leadForm)
    {
        case "yes":
            leadFormContainer.style.display = "block";
            const nameInput = document.createElement("input");
            leadFormContainer.style.display= "flex";
            leadFormContainer.style.flexDirection = "column";
            leadFormContainer.style.alignItems = "center";
            leadFormContainer.style.justifyContent = "center";
            leadFormContainer.style.paddingTop = "5vh";


            nameInput.type = "text";
            nameInput.id = "nameInput";
            nameInput.placeholder = " Your Name";
            nameInput.style.margin = "10px";
            nameInput.style.borderRadius = "5px";
            nameInput.style.padding = "3px";

            const emailInput = document.createElement("input");
            emailInput.type = "email";
            emailInput.id = "emailInput";
            emailInput.placeholder = " Your Email";
            emailInput.style.marginBottom = "10px";
            emailInput.style.borderRadius = "5px";
            emailInput.style.padding = "3px";
            leadFormContainer.appendChild(nameInput);
            leadFormContainer.appendChild(emailInput);
            leadFormContainer.appendChild(button);
            const page = document.getElementById("generatedLandingPage");
            page.appendChild(leadFormContainer);
            break;
        case "no":
            leadFormContainer.style.display = "none";
            break;
    }
}
else {
    while ( document.getElementById("leadFormContainer"))
    {
    document.getElementById("leadFormContainer").remove();
    }
    updateLeadFormToggle();
}
}

function SaveLandingPage(event)
{
        event.preventDefault(); // Prevent form submission
        const page = document.getElementById("generatedLandingPage");
        if (!page) {
            alert("No page to copy.");
            return;
        }
        const username = localStorage.getItem('currentUser');
        let width = page.style.width; //
        let minHeight = page.style.minHeight; //
        let hedingtext = document.getElementById("Heading").value;
        let maintext = document.getElementById("Text").value;
        let backgroundcolor = document.getElementById("BackgroundColor").value;
        let headingcolor = document.getElementById("HeadingColor").value;
        let textcolor = document.getElementById("TextColor").value;
        let headingfont = document.getElementById("head-font").value;
        let textfont = document.getElementById("text-font").value;
        let headingfontsize = document.getElementById("headingFontSize").value;
        let textfontsize = document.getElementById("textFontSize").value;
        let designstyle = document.getElementById("designStyle").value;
        let backgroundimage = document.getElementById("imageInput").value;
        let dropimage = document.getElementById("addimageInput").value;
        let imgwidth = document.getElementById("imgwidth").value;
        let imgheight = document.getElementById("imgheight").value;
        let imgborder = document.getElementById("imgborderradius").value;
        let ctabehavior = document.getElementById("CTAButtonBehavior").value;
        let ctacolor = document.getElementById("CTAColor").value;
        let ctatext = document.getElementById("CTAButtonText").value;
        let ctainput = document.getElementById("ctaLinkInput")?.value || ""; 
        let ctawhatsapp = document.getElementById("ctaWhatsappInput")?.value || "";
        let ctaphone = document.getElementById("ctaPhoneInput")?.value || "";
        let template = document.getElementById("templates").value; 
        let leadform = document.getElementById("leadFormToggle").value;

        let landingPage = new LandingPage(username, width, minHeight, hedingtext, maintext, backgroundcolor, headingcolor, textcolor, headingfont, textfont, headingfontsize, textfontsize, designstyle, backgroundimage, dropimage, imgwidth, imgheight, imgborder, ctabehavior, ctacolor, ctatext, ctainput, ctawhatsapp, ctaphone, template, leadform);

        let storedLandingPages = JSON.parse(localStorage.getItem('UsersLandingPages')) || [];
        storedLandingPages.push(landingPage);
        localStorage.setItem('UsersLandingPages', JSON.stringify(storedLandingPages));
        alert("Landing Page saved successfully!");
        
}


    const downloadbutton = document.getElementById("DownloadHTML");
    downloadbutton.addEventListener("click", () => {
    // Create a basic HTML wrapper for the content
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Landing Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=DM+Sans&family=Figtree&family=Inter&family=Manrope&family=Outfit&family=Rubik&family=Space+Grotesk&family=Sora&family=Urbanist&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Orbitron:wght@400..900&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
    <style>
        html, body {
            min-height: 100vh;
            height: 100%;
            margin: 0;
            font-family: sans-serif;
        }
        .landing-page {
          min-height: 100vh; 
            display: flex;
            flex-direction: column;

            width: ${page.style.width};
            min-width: ${page.style.minWidth};

            display: ${page.style.display};
            flex-direction: ${page.style.flexDirection};
            align-items: ${page.style.alignItems};
            justify-content: ${page.style.justifyContent};
            padding: ${page.style.padding};
            background-image: ${page.style.backgroundImage ? page.style.backgroundImage : 'none'};
            background-size: ${page.style.backgroundSize ? page.style.backgroundSize : 'cover'};
            background-repeat: ${page.style.backgroundRepeat ? page.style.backgroundRepeat : 'no-repeat'};
            background-position: ${page.style.backgroundPosition ? page.style.backgroundPosition : 'center'};
            background-color: ${page.style.backgroundColor};
        }

        h1 {
            text-align: center;
            color: ${b.headingcolor};
            font-family: ${b.headingfont};
            font-size: ${b.headingfontsize}px;
        }
        pre {
            text-align: center;
            color: ${b.textcolor};
            font-family: ${b.textfont};
            font-size: ${b.textfontsize}px;
        }
        #ImageToAdd {
            width: ${b.imgwidth}px;
            height: ${b.imgheight}px;
            aspect-ratio: 1/1;
            border-radius: ${b.imgborder}px;
            object-fit: cover;
            margin: 3vh;
        }
        #cta {
            background-color: ${b.ctacolor === "#000000" ? "#3f51b5" : b.ctacolor};
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 16px;
        }
        #leadFormContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-top: 5vh;
        }
        #leadFormContainer input {
            margin: 10px;
            border-radius: 5px;
            padding: 3px;
        }
            button {
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 10rem;
  margin : 2vh;
  margin-left: auto;
  margin-right: auto;
  

}

    </style>
</head>
<body>
    ${page.outerHTML}
    <script>
                    const cta = document.getElementById("cta");
                    const clas = cta.className;

    cta.addEventListener("click", () => {
                        if (cta.className === "default") //link to URL
                        {
                            window.location.href = cta.getAttribute("data-link");
                        }

                    if (cta.className === "Behavior1") // phone call
                        {
                            window.location.href = "tel:" + cta.getAttribute("data-link");

                        }
                        
                    if (cta.className === "Behavior2") // Open WhatsApp
                        {
                            window.location.href = "https://wa.me/" + cta.getAttribute("data-link");

                        }

                    });
    </script>
</body>
</html>
    `.trim();

    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "landing-page.html";
    link.click();
});








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