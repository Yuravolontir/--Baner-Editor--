




export function createBanner(event) {
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

    const p1 = document.createElement("p");
    p1.id = "bannerP"; // So we can update it
    p1.style.textAlign = "center";
    p1.textContent = document.getElementById("bannerText").value;

    div.appendChild(h1);
    blank.appendChild(div);
}
export function updateBannerHeading() {
    const h1 = document.getElementById("bannerH1");
    if (h1) {
        h1.textContent = document.getElementById("bannerHeading").value;
    }
}

export function updateBannerText() {
        const p1 = document.getElementById("bannerText");
    if (p1) {
                p1.textContent = document.getElementById("bannerText").value;
    }
}


export function updateBannerColor() {
    const div = document.getElementById("generatedBanner");
    if (div) {
        div.style.backgroundColor = event.target.value;
        div.style.backgroundColor = document.querySelector("input[type='color']").value;
    }
}
