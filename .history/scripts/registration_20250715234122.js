import { User } from './classes.js'; 
import { UsersList } from './global.js'; 



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
    UsersList.setItem('UsersList', JSON.stringify(UsersList));
}