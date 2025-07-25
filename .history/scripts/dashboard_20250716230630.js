



window.addEventListener("DOMContentLoaded", welcomeUser);
window.addEventListener("DOMContentLoaded", UsersBannersList);


function welcomeUser() {
    const welcome = document.getElementById("welcome");
    const name = localStorage.getItem('currentUser'); // <-- Get username
    welcome.textContent = name ? `Welcome, ${name}!` : "Welcome!";}



function UsersBannersList() {
    const storedUsersBanners = JSON.parse(localStorage.getItem('UsersBanners')) || [];
    const preview = document.getElementById("preview");
    preview.innerHTML = "";

    const currentUser = localStorage.getItem('currentUser');

    for (let i = 0; i < storedUsersBanners.length; i++) {
        const b = storedUsersBanners[i];
        if (b.username === currentUser) 
            {
            const banner = document.createElement("div");
            banner.className = "banner";
            banner.style.width = b.width;
            banner.style.height = b.height;

            // 🟢 Apply background and border from design style ONLY if no customization
            if (b.designstyle) {
                switch (b.designstyle) {
                    case "minimal":
                        banner.style.background = "white";
                        banner.style.border = "1px solid #ccc";
                        break;
                    case "bold":
                        banner.style.background = "linear-gradient(135deg, #ff6b6b, #6a00f4)";
                        banner.style.border = "none";
                        break;
                    case "pixel":
                        banner.style.background = "black";
                        banner.style.border = "2px solid #444";
                        break;
                    default:
                        banner.style.background = b.backgroundcolor;
                        banner.style.border = "1px solid black";
                        break;
                }
            } else {
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

            preview.appendChild(banner);
        }
    }
}






    
