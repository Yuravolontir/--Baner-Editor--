

import { User } from './classes.js'; 
import { UsersList } from './global.js'; 


document.getElementById("welcome").addEventListener("DOMContentLoaded", welcomeUser);

function welcomeUser() {
    document.getElementById("welcome").textContent = `Welcome, ${ UsersList[ UsersList.length - 1].username}!`;

}