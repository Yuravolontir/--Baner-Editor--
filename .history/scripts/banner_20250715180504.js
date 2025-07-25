



export function createBanner1(event) {
    event.preventDefault();
    
    let blank = document.querySelector("#preview");
    let div = document.createElement("div");
    div.style.width = "250px";
    div.style.height = "250px";
    div.style.border = "1px solid black";
    div.style.background = "white";
    blank.innerHTML = ""; // clear previous preview
    blank.appendChild(div);
}
export function createBanner2(event) {
    event.preventDefault();

    const blank = document.querySelector("#preview");

    // Remove any existing banner
    blank.innerHTML = "";

    const div = document.createElement("div");
    div.id = "generatedBanner"; // So we can update it later
    div.style.width = "300px";
    div.style.height = "600px";
    div.style.border = "1px solid black";
    div.style.background = "white";


    const h1 = document.createElement("h1");
    h1.id = "bannerText"; // So we can update it
    h1.style.textAlign = "center";
    h1.textContent = document.getElementById("bannerHeading").value;

    div.appendChild(h1);
    blank.appendChild(div);
}
export function updateBannerHeading() {
    const h1 = document.getElementById("bannerText");
    if (h1) {
        h1.textContent = document.getElementById("bannerHeading").value;
    }
}
