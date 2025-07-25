import {createBanner, updateBannerHeading, updateBannerText, addParagraphOnEnter, updateBannerColor} from "./banner.js";




document.getElementById("250X250").addEventListener('click', createBanner);
document.getElementById("300X600").addEventListener('click', createBanner);


document.getElementById("bannerHeading").addEventListener('input', updateBannerHeading);

document.getElementById("bannerText").addEventListener('input', updateBannerText);
document.getElementById("bannerText").addEventListener('keydown', addParagraphOnEnter);

document.querySelector("input[type='color']").addEventListener('input', updateBannerColor);