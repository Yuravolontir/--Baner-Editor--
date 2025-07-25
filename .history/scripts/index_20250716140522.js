
import {storeUsersData, checkUsersData} from "./registration.js";







//---------------------------------------registration---------------------------------------------

document.querySelector("#form-container form").addEventListener("submit", storeUsersData);

document.querySelector("#form-login-container form").addEventListener("submit", checkUsersData);





















