

import { UsersList } from './global.js'; 


window.addEventListener("DOMContentLoaded", welcomeUser);

function welcomeUser() {
    document.getElementById("welcome").textContent = `Welcome, ${ UsersList[ UsersList.length - 1].username}!`;

}