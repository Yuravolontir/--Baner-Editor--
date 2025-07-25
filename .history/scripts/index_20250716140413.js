import {createBanner, updateBannerHeading, updateBannerText, updateBannerColor,updateBannerHeadingColor , updateBannerTextColor,updateHeadingFont , updateTextFont, updateHeadingFontSize, updateTextFontSize, updateDesignStyle} from "./banner.js";

import {storeUsersData, checkUsersData} from "./registration.js";


//--------------------------------banner-----------------------------------




//---------------------------------------registration---------------------------------------------

document.querySelector("#form-container form").addEventListener("submit", storeUsersData);

document.querySelector("#form-login-container form").addEventListener("submit", checkUsersData);















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






