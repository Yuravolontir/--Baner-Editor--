import {createBanner, updateBannerHeading, updateBannerText, updateBannerColor,updateBannerHeadingColor , updateBannerTextColor,updateHeadingFont , updateTextFont, updateHeadingFontSize, updateTextFontSize, updateDesignStyle} from "./banner.js";

import {storeUsersData, checkUsersData} from "./registration.js";


//--------------------------------banner-----------------------------------
document.getElementById("250X250").addEventListener('click', createBanner);
document.getElementById("300X600").addEventListener('click', createBanner);


document.getElementById("bannerHeading").addEventListener('input', updateBannerHeading);

document.getElementById("bannerText").addEventListener('input', updateBannerText);

document.getElementById("BackgroundColor").addEventListener('input', updateBannerColor);

document.getElementById("HeadingColor").addEventListener('input', updateBannerHeadingColor);

document.getElementById("TextColor").addEventListener('input', updateBannerTextColor);

document.getElementById("head-font").addEventListener('input', updateHeadingFont);

document.getElementById("text-font").addEventListener('input', updateTextFont);

document.getElementById("headingFontSize").addEventListener('input', updateHeadingFontSize)

document.getElementById("textFontSize").addEventListener('input', updateTextFontSize);

document.getElementById("designStyle").addEventListener("change", updateDesignStyle);



//---------------------------------------registration---------------------------------------------
























