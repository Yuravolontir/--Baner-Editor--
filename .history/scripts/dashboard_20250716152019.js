



window.addEventListener("DOMContentLoaded", welcomeUser);

function welcomeUser() {
    const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
    const welcome = document.getElementById("welcome");
    welcome.textContent = `Welcome, ${storedUsers[storedUsers.length - 1].username}!`;
}