

import { User } from './classes.js'; 
import { UsersList } from './global.js'; 


document.getElementById("welcome").addEventListener("DOMContentLoaded", welcomeUser);

function welcomeUser() {
    const storedUsers = JSON.parse(localStorage.getItem('UsersList'));

    document.getElementById("welcome").textContent = `Welcome, ${storedUsers[storedUsers.length - 1].name}!`;
}