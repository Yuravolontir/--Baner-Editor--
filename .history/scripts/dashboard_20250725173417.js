



window.addEventListener("DOMContentLoaded", welcomeUser);
window.addEventListener("DOMContentLoaded", UsersBannersList);
window.addEventListener("DOMContentLoaded", UsersEmailBannersList);
window.addEventListener("DOMContentLoaded", UsersLandingPagesList);


function welcomeUser() {
    const welcome = document.getElementById("welcome");
    const name = localStorage.getItem('currentUser'); // <-- Get username
    welcome.textContent = name ? `Welcome, ${name}!` : "Welcome!";}



function UsersBannersList() {
    const storedUsersBanners = JSON.parse(localStorage.getItem('UsersBanners')) || [];
    const preview = document.getElementById("preview");
    preview.innerHTML = "";

    const currentUser = localStorage.getItem('currentUser');

    storedUsersBanners.forEach((b, index) => {      
        if (b.username === currentUser) 
            {
            const banner = document.createElement("div");
            banner.className = "banner";
            banner.style.width = b.width;
            banner.style.height = b.height;

            if (b.designstyle!== "default") {
                switch (b.designstyle) {
                    case "gradient1":
                        banner.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
                        break;
                    case "gradient2":
                        banner.style.background = "linear-gradient(135deg, #ff6b6b, #6a00f4)";
                        break;
                    case "gradient3":
                        banner.style.background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
                        break;
                }
            } else {
                 if(b.backgroundcolor=="#000000")
                banner.style.backgroundColor = "white";
                        else 
                banner.style.backgroundColor = b.backgroundcolor;
                banner.style.border = "1px solid black";
            }

            const heading = document.createElement("h1");
            heading.textContent = b.hedingtext;
            heading.style.color = b.headingcolor;
            heading.style.fontFamily = b.headingfont;
            heading.style.fontSize = b.headingfontsize + "px";
            heading.style.textAlign = "center";
            banner.appendChild(heading);

            const text = document.createElement("pre");
            text.textContent = b.maintext;
            text.style.color = b.textcolor;
            text.style.fontFamily = b.textfont;
            text.style.fontSize = b.textfontsize + "px";
            text.style.textAlign = "center";
            banner.appendChild(text);



            const outerDiv = document.createElement("div");
            const downloadbutton = document.createElement("button");
            const deletebutton = document.createElement("button");
            downloadbutton.textContent = "Download";
            deletebutton.textContent = "Delete";
            downloadbutton.className = "download-button";
            deletebutton.className = "delete-button";
            
            // Add event listener for the download button
            downloadbutton.addEventListener("click", () => {
                html2canvas(banner).then(canvas => {
                    const link = document.createElement("a");
                    link.download = "my-banner.png";
                    link.href = canvas.toDataURL();
                    link.click();
                });
            });
            // ----------------------------
            deletebutton.addEventListener("click", () => {
                storedUsersBanners.splice(index, 1);
                localStorage.setItem('UsersBanners', JSON.stringify(storedUsersBanners));
                UsersBannersList();
            });


            outerDiv.appendChild(banner);
            outerDiv.appendChild(downloadbutton);
            outerDiv.appendChild(deletebutton);

            preview.appendChild(outerDiv);

        }
    }
    );
}




function UsersEmailBannersList() {
    const storedUsersEmailBanners = JSON.parse(localStorage.getItem('UsersEmailBanners')) || [];
    const preview = document.getElementById("email-preview");
    preview.innerHTML = "";

    const currentUser = localStorage.getItem('currentUser');

    storedUsersEmailBanners.forEach((b, index) => {
        if (b.username === currentUser) 
            {
            const banner = document.createElement("div");
            banner.className = "Emailbanner";
            banner.style.width = b.width;
            banner.style.minHeight = b.minHeight;

            if (b.designstyle!== "default") {
                switch (b.designstyle) {
                    case "gradient1":
                        banner.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
                        break;
                    case "gradient2":
                        banner.style.background = "linear-gradient(135deg, #ff6b6b, #6a00f4)";
                        break;
                    case "gradient3":
                        banner.style.background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
                        break;
                }
            } else {
                        if(b.backgroundcolor=="#000000")
                banner.style.backgroundColor = "white";
                        else 
                banner.style.backgroundColor = b.backgroundcolor;
                banner.style.backgroundImage = `url(${b.image})`;
                banner.style.backgroundSize = "cover";
                banner.style.backgroundRepeat = "no-repeat";
                banner.style.backgroundPosition = "center";
                banner.style.border = "1px solid black";
            }

            const heading = document.createElement("h1");
            heading.textContent = b.hedingtext;
            heading.style.color = b.headingcolor;
            heading.style.fontFamily = b.headingfont;
            heading.style.fontSize = b.headingfontsize + "px";
            heading.style.textAlign = "center";
            banner.appendChild(heading);

            const text = document.createElement("pre");
            text.textContent = b.maintext;
            text.style.color = b.textcolor;
            text.style.fontFamily = b.textfont;
            text.style.fontSize = b.textfontsize + "px";
            text.style.textAlign = "center";
            banner.appendChild(text);



            const outerDiv = document.createElement("div");
            const deletebutton = document.createElement("button");
            const CopyHTMLbutton = document.createElement("button");
            CopyHTMLbutton.textContent = "Copy HTML";
            deletebutton.textContent = "Delete";
            deletebutton.className = "delete-button";
            CopyHTMLbutton.id = "copy-html-button"; 

            deletebutton.addEventListener("click", () => {
                storedUsersEmailBanners.splice(index, 1);
                localStorage.setItem('UsersEmailBanners', JSON.stringify(storedUsersEmailBanners));
                UsersEmailBannersList();
            });


            //copy html button
            CopyHTMLbutton.addEventListener("click", () => {
            if (!banner) {
                alert("No banner to copy.");
                return;
            }

            // Create a temporary container to extract inner HTML
            const tempDiv = document.createElement("div");
            tempDiv.appendChild(banner.cloneNode(true)); // Clone to keep original safe
            const htmlContent = tempDiv.innerHTML;
              const fullHTML = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <title>Email Banner</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <!-- Google Fonts -->
                    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=DM+Sans&family=Figtree&family=Inter&family=Manrope&family=Outfit&family=Rubik&family=Space+Grotesk&family=Sora&family=Urbanist&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Orbitron:wght@400..900&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
                    </head>
                    <body>
                    ${htmlContent}
                    </body>
                    </html>
                    `;
            // Use Clipboard API
            navigator.clipboard.writeText(fullHTML)
                .then(() => {
                alert("HTML copied to clipboard!");
                })
                .catch(err => {
                console.error("Failed to copy HTML:", err);
                alert("Failed to copy. Try again.");
                });
            });


            outerDiv.appendChild(banner);
            outerDiv.appendChild(deletebutton);
            outerDiv.appendChild(CopyHTMLbutton);
            preview.appendChild(outerDiv);

        }
    }
    );
}


function UsersLandingPagesList() {
    const storedUsersLandingPages = JSON.parse(localStorage.getItem('UsersLandingPages')) || [];
    const preview = document.getElementById("landing-preview");
    preview.innerHTML = "";

    const currentUser = localStorage.getItem('currentUser');
    
    storedUsersLandingPages.forEach((b, index) => {
        if (b.username === currentUser) 
        {
            const page = document.createElement("div");
            page.id = "generatedLandingPage"; // So we can update it later
            page.className = "landing-page";
            page.style.width = b.width;
            page.style.minWidth = "1000px";
            //page.style.minHeight = b.minHeight;
            page.style.display = "flex";
            page.style.flexDirection = "column";
            page.style.alignItems = "center";
            page.style.justifyContent = "center";
            page.style.padding = "20px";  
            if(b.backgroundcolor=="#000000")
            page.style.backgroundColor = "white";
            else      
            page.style.backgroundColor = b.backgroundcolor;

            const h1 = document.createElement("h1");
            h1.id = "H1"; // So we can update it
            h1.style.textAlign = "center";
            h1.textContent = b.hedingtext;
            h1.style.color = b.headingcolor;
            h1.style.fontFamily = b.headingfont;
            h1.style.fontSize = b.headingfontsize + "px";
            page.appendChild(h1);
            const pre = document.createElement("pre");
            pre.id = "Pre"; // So we can update it
            pre.style.textAlign = "center";
            pre.textContent = b.maintext;
            pre.style.color = b.textcolor;
            pre.style.fontFamily = b.textfont;
            pre.style.fontSize = b.textfontsize + "px";
            page.appendChild(pre);
            if (b.template=="default")
            {
                const cta = document.createElement("button");
                cta.id = "cta";
                cta.textContent = b.ctatext;
                if( b.ctacolor=="#000000")
                    cta.style.backgroundColor = "#3f51b5";
                else
                cta.style.backgroundColor = b.ctacolor;
                cta.style.padding = "12px 24px";
                cta.style.border = "none";
                cta.style.borderRadius = "6px";
                cta.style.cursor = "pointer";
                cta.style.marginTop = "16px";
                
                        if (b.ctabehavior === "default") //link to URL
                        {
                            cta.setAttribute("data-link", b.ctainput);
                            cta.setAttribute("class", "default");                        
                        }
                    if (b.ctabehavior === "Behavior1") // phone call
                        {
                            cta.setAttribute("data-link", b.ctaphone);
                            cta.setAttribute("class", "Behavior1");                        
                        }
                        
                    if (b.ctabehavior === "Behavior2") // Open WhatsApp
                        {
                            cta.setAttribute("data-link", b.ctawhatsapp);
                            cta.setAttribute("class", "Behavior2");                        
                        }





                cta.addEventListener("click", () => {
                        if (b.ctabehavior === "default") //link to URL
                        {
                            window.location.href = b.ctainput;
                        }

                    if (b.ctabehavior === "Behavior1") // phone call
                        {
                            window.location.href = "tel:" + b.ctaphone;

                        }
                        
                    if (b.ctabehavior === "Behavior2") // Open WhatsApp
                        {
                            window.location.href = "https://wa.me/" + b.ctawhatsapp;

                        }

                    });

            page.appendChild(cta);
            }
            if(b.designstyle) 
            {
                switch (b.designstyle) {
                    case "gradient1":
                        page.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
                        break;
                    case "gradient2":
                        page.style.background = "linear-gradient(135deg, #ff6b6b, #6a00f4)";
                        break;
                    case "gradient3":
                        page.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
                        break;
                }
            }
            
            if(b.backgroundimage)
            {
                const backgroundimg = document.createElement("img"); // So we can update it latermage)
                backgroundimg.id = "BackgroundImage";
                backgroundimg.style.width = "100%";
                page.style.backgroundImage = `url(${b.backgroundimage})`;
                page.style.backgroundSize = "cover";
                page.style.backgroundRepeat = "no-repeat";
                page.style.backgroundPosition = "center";
               
            }
            const img = document.createElement("img"); // So we can update it latermage)
            if(b.dropimage)
            {
                img.id = "ImageToAdd";
                img.src = b.dropimage;
                img.style.width = b.imgwidth + "px";
                img.style.height = b.imgheight + "px";
                img.style.aspectRatio = "1/1";
                img.style.borderRadius = b.imgborder + "px";
                img.style.objectFit = "cover";
                img.style.omargin = "3vh";
                img.src = b.dropimage;
                page.appendChild(img);
            }
            if(b.template)
            {
                
                const cta = document.createElement("button");
                cta.id = "cta";
                cta.textContent = b.ctatext;
                if( b.ctacolor=="#000000")
                    cta.style.backgroundColor = "#3f51b5";
                else
                cta.style.backgroundColor = b.ctacolor;
                cta.style.padding = "12px 24px";
                cta.style.border = "none";
                cta.style.borderRadius = "6px";
                cta.style.cursor = "pointer";
                cta.style.marginTop = "16px";

                        if (b.ctabehavior === "default") //link to URL
                        {
                            cta.setAttribute("data-link", b.ctainput);
                            cta.setAttribute("class", "default");                        
                        }
                    if (b.ctabehavior === "Behavior1") // phone call
                        {
                            cta.setAttribute("data-link", b.ctaphone);
                            cta.setAttribute("class", "Behavior1");                        
                        }
                        
                    if (b.ctabehavior === "Behavior2") // Open WhatsApp
                        {
                            cta.setAttribute("data-link", b.ctawhatsapp);
                            cta.setAttribute("class", "Behavior2");                        
                        }

                cta.addEventListener("click", () => {
                        if (b.ctabehavior === "default") //link to URL
                        {

                            window.location.href = b.ctainput;
                        }

                    if (b.ctabehavior === "Behavior1") // phone call
                        {

                            window.location.href = "tel:" + b.ctaphone;

                        }
                        
                    if (b.ctabehavior === "Behavior2") // Open WhatsApp
                        {
                            window.location.href = "https://wa.me/" + b.ctawhatsapp;

                        }

                    });

                switch (b.template) {
                    case "template1": // Clean & white
                page.appendChild(h1);
                page.appendChild(pre);
                page.appendChild(img);
                page.appendChild(cta);
                        break;
                    case "template3": 
                page.appendChild(img);
                page.appendChild(cta);
                page.appendChild(h1);
                page.appendChild(pre);
                        break;
                    case "template2": 
                page.appendChild(h1);
                page.appendChild(img);
                page.appendChild(pre);
                page.appendChild(cta);                    
            }
        }
        
      if (b.leadform === "yes")
      {
            const leadFormContainer = document.createElement("div");
            const button = document.createElement("button");
            button.textContent = "Submit";
            button.id = "submitLeadForm";
            button.style.padding = "12px 24px";
            if (b.ctacolor != "#000000" )
            {
                button.style.backgroundColor =b.ctacolor;
            
            }
            leadFormContainer.id = "leadFormContainer";
            leadFormContainer.style.display = "none";


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
            page.appendChild(leadFormContainer);

      }



















//----------------------------------------------------------------------------------
            const outerDiv = document.createElement("div");
            const downloadbutton = document.createElement("button");
            const deletebutton = document.createElement("button");
            downloadbutton.textContent = "Download";
            deletebutton.textContent = "Delete";
            downloadbutton.className = "download-button";
            deletebutton.className = "delete-button";
            downloadbutton.style.margin="2vh";
            deletebutton.style.margin="2vh";
            
            // Add event listener for the download button
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
            // ----------------------------
            deletebutton.addEventListener("click", () => {
                storedUsersLandingPages.splice(index, 1);
                localStorage.setItem('UsersLandingPages', JSON.stringify(storedUsersLandingPages));
                UsersLandingPagesList() ;

            });


            outerDiv.appendChild(page);
            outerDiv.appendChild(downloadbutton);
            outerDiv.appendChild(deletebutton);

            preview.appendChild(outerDiv);




           
        }

    });
}
            
    
