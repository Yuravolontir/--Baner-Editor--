import {createBanner, updateBannerHeading, updateBannerText, updateBannerColor, updateBannerTextColor} from "./banner.js";




document.getElementById("250X250").addEventListener('click', createBanner);
document.getElementById("300X600").addEventListener('click', createBanner);


document.getElementById("bannerHeading").addEventListener('input', updateBannerHeading);

document.getElementById("bannerText").addEventListener('input', updateBannerText);

document.getElementById("BackgroundColor").addEventListener('input', updateBannerColor);

document.getElementById("TextColor").addEventListener('input', updateBannerTextColor);











