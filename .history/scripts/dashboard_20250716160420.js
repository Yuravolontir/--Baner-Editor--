



window.addEventListener("DOMContentLoaded", welcomeUser);

//window.addEventListener("DOMContentLoaded", UsersBannersList);


function welcomeUser(name) {
    const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
    const welcome = document.getElementById("welcome");
    welcome.textContent = `Welcome, ${name}!`;
}

//function UsersBannersList() {
   // const storedUsersBanners = JSON.parse(localStorage.getItem('UsersBanners'));
   // const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
    //for (let i = 0; i < storedUsersBanners.length; i++) {