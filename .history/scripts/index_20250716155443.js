


import { User } from './classes.js'; 
import { UsersList } from './global.js'; 

document.getElementById("submit-register").addEventListener('click', storeUsers);
document.getElementById("submit-login").addEventListener('click', checkUsers);


// Load users from localStorage at start
const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
//if (storedUsers) {
//    storedUsers.forEach(user => UsersList.push(user));
//}
export function storeUsers(event) 
{
    event.preventDefault(); // Prevent form submission
    let form = event.target;
    let firstName = form .querySelector("#fname").value;
    let email = form.querySelector("#email").value;
    let username = form.querySelector("#username").value;
    let password = form.querySelector("#password").value;
    
    let user = new User(firstName, email, username, password);
    UsersList.push(user); // Add user to the UsersList array
    saveToLocalStorage();
    alert('User registered successfully!'); // Alert the user
    form.reset(); // Clear the form fields after successful registration
}
 function saveToLocalStorage() {
    localStorage.setItem('UsersList', JSON.stringify(UsersList)); // Save to localStorage
}

// Check user credentials during login
export function checkUsers(event) {
    event.preventDefault();
    let form = event.target;
    let username = form.querySelector("#login-username").value;
    let password = form.querySelector("#login-password").value;
    for ( let i = 0; i < UsersList.length; i++) 
        {
            if (UsersList[i].username === username && UsersList[i].password === password) 
            {                
                window.location.href = "/dashboard.html"; // Redirect on successful login
                return;
            }
        }
    alert('Invalid username or password.');
}





















//---------------------------------------registration---------------------------------------------

document.querySelector("#form-container form").addEventListener("submit", storeUsersData);

document.querySelector("#form-login-container form").addEventListener("submit", checkUsersData);





















