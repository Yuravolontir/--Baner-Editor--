

import { UsersList } from './global.js'; 


window.addEventListener("DOMContentLoaded", welcomeUser);

function welcomeUser() {
    const welcome = document.getElementById("welcome");
    if (UsersList.length > 0) {
        welcome.textContent = `Welcome, ${UsersList[UsersList.length - 1].username}!`;
    } else {
        welcome.textContent = "Welcome!";
    }
}