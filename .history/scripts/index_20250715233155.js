import {createBanner, updateBannerHeading, updateBannerText, updateBannerColor,updateBannerHeadingColor , updateBannerTextColor,updateHeadingFont , updateTextFont, updateHeadingFontSize, updateTextFontSize, updateDesignStyle} from "./banner.js";

import {storeUserData} from "./registration.js";


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

document.getElementById("submit-register").addEventListener("click", storeUserData);
















// Add event listener for the download button
document.getElementById("downloadBanner").addEventListener("click", () => {
    const banner = document.getElementById("generatedBanner");
    if (!banner) return;

    html2canvas(banner).then(canvas => {
        const link = document.createElement("a");
        link.download = "my-banner.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
// Add event listener for the download button






