



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
            page.style.minWidth = "700px";
            page.style.minHeight = b.minHeight;
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

            if(b.designstyle!== "default") 
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
                const img = document.createElement("img"); // So we can update it latermage)
                img.id = "BackgroundImage";
                img.style.width = "100%";
                img.style.backgroundImage = `url(${b.backgroundimage})`;
                img.style.backgroundSize = "cover";
                img.style.backgroundRepeat = "no-repeat";
                img.style.backgroundPosition = "center";
                page.appendChild(img);
            }
            if(b.dropimage)
            {
                const img = document.createElement("img"); // So we can update it latermage)
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










console.log("Landing page background color:", b.backgroundcolor);

            preview.appendChild(page);
        }

    });
}   
    
