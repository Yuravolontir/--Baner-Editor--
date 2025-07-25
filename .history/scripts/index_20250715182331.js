import {createBanner, updateBannerHeading, updateBannerColor} from "./banner.js";




document.getElementById("250X250").addEventListener('click', createBanner);
document.getElementById("300X600").addEventListener('click', createBanner);




document.getElementById("bannerHeading").addEventListener('input', updateBannerHeading);
document.querySelector("input[type='color']").addEventListener('input', updateBannerColor);