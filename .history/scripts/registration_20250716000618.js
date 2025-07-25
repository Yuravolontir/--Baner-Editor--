import { User } from './classes.js'; 
import { UsersList } from './global.js'; 


// Load users from localStorage at start
const storedUsers = JSON.parse(localStorage.getItem('UsersList'));
if (storedUsers) {
    storedUsers.forEach(user => UsersList.push(user));
}
export function storeUsersData(event) 
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
}
 function saveToLocalStorage() {
    localStorage.setItem('UsersList', JSON.stringify(UsersList)); // שמירה בלוקאל סטורג׳
    alert('User registered successfully!'); // הודעה למשתמש
}

export function checkUsersData(event) {
    event.preventDefault();
    let form = event.target;
    let username = form.querySelector("#login-username").value;
    let password = form.querySelector("#login-password").value;
    for ( let i = 0; i < UsersList.length; i++) 
        {
            if (UsersList[i].username === username && UsersList[i].password === password) 
            {
                alert('Login successful!'); // הודעה למשתמש
                window.location.href = "/dashboard.html"; // ✅ Redirect after success
                return; // Stop further execution
            }
        }
            alert('Invalid username or password.'); // Optional: show error if not found

}