



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

    for (let i = 0; i < storedUsersBanners.length; i++) {
        if (storedUsersBanners[i].username === ) {
            const banner = document.createElement("div");
            banner.className = "banner";
            banner.style.width = storedUsersBanners[i].width;
            banner.style.height = storedUsersBanners[i].height;
            banner.style.backgroundColor = storedUsersBanners[i].backgroundcolor;
            banner.style.border = "1px solid black";

            const heading = document.createElement("h1");
            heading.textContent = storedUsersBanners[i].hedingtext;
            heading.style.color = storedUsersBanners[i].headingcolor;
            heading.style.fontFamily = storedUsersBanners[i].headingfont;
            heading.style.fontSize = storedUsersBanners[i].headingfontsize + "px";
            banner.appendChild(heading);

            const text = document.createElement("p");
            text.textContent = storedUsersBanners[i].maintext;
            text.style.color = storedUsersBanners[i].textcolor;
            text.style.fontFamily = storedUsersBanners[i].textfont;
            text.style.fontSize = storedUsersBanners[i].textfontsize + "px";
            banner.appendChild(text);

            preview.appendChild(banner);
        }
    }
}






    
