import { Banner } from "./classes";




export function createBanner(event) {
    event.preventDefault();
    
    let blank = document.querySelector("#preview");
    let div = document.createElement("div");
    div.style.width = "250px";
    div.style.height = "250px";
    blank.innerHTML = div;

    