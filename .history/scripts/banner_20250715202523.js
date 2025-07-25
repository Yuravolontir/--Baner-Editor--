




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

    const pre = document.createElement("pre");
    pre.id = "bannerPre"; // So we can update it
    pre.style.textAlign = "center";
    pre.textContent = document.getElementById("bannerText").value;

    div.appendChild(h1);
    div.appendChild(pre);

    blank.appendChild(div);
}
export function updateBannerHeading() {
    const h1 = document.getElementById("bannerH1");
    if (h1) {
        h1.textContent = document.getElementById("bannerHeading").value;
    }
}

export function updateBannerText() {
        const pre = document.getElementById("bannerPre");
    if (pre) {
        pre.textContent = document.getElementById("bannerText").value;
    }
}


export function updateBannerColor() {
    const div = document.getElementById("generatedBanner");
    if (div) {
        div.style.backgroundColor = document.getElementById("BackgroundColor").value;
    }
}

export function updateBannerHeadingColor() {
            const h1= document.getElementById("bannerH1");
    if (h1) {
        h1.style.color = document.getElementById("HeadingColor").value;
    }
}

export function updateBannerTextColor() {
        const pre = document.getElementById("bannerPre");
    if (pre) {
        pre.style.color = document.getElementById("TextColor").value;
    }
}

export function updateHeadingFont() {
    const h1 = document.getElementById("bannerH1");
    if (h1) {
        h1.style.fontFamily = document.getElementById("head-font").value;
    }
}
export function updateTextFont() {
    const pre = document.getElementById("bannerPre");
    if (pre) {
        pre.style.fontFamily = document.getElementById("text-font").value;
    }
}

export function updateHeadingFontSize() {
    const h1 = document.getElementById("bannerH1");
    if (h1) {
        h1.style.fontSize = document.getElementById("headingFontSize").value + "px";
    }
}