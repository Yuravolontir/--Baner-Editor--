import {createBanner, updateBannerHeading, updateBannerText, updateBannerColor} from "./banner.js";




document.getElementById("250X250").addEventListener('click', createBanner);
document.getElementById("300X600").addEventListener('click', createBanner);


document.getElementById("bannerHeading").addEventListener('input', updateBannerHeading);
document.getElementById("bannerText").addEventListener('input', updateBannerText);

document.querySelector("input[type='color']").addEventListener('input', updateBannerColor);