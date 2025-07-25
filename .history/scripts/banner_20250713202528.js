



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
    
    let blank = document.querySelector("#preview");
    let div = document.createElement("div");
    let text = document.getElementById("bannerHeading").value;
    let p = document.createElement("p");
    div.style.width = "300px";
    div.style.height = "600px";
    div.style.border = "1px solid black";
    div.style.background = "white";
    blank.innerHTML = ""; // clear previous preview
    blank.appendChild(div);

}
