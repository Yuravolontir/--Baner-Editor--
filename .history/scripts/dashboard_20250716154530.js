



window.addEventListener("DOMContentLoaded", welcomeUser);

window.addEventListener("DOMContentLoaded", UsersBannersList);


function welcomeUser() {
    const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
    const welcome = document.getElementById("welcome");
    welcome.textContent = `Welcome, ${storedUsers[storedUsers.length - 1].username}!`;
}

//function UsersBannersList() {
   // const storedUsersBanners = JSON.parse(localStorage.getItem('UsersBanners'));
   // const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
    //for (let i = 0; i < storedUsersBanners.length; i++) {