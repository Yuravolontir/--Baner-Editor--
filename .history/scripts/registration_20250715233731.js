import { User } from './classes.js'; 
import { UsersListList } from './global.js'; 



export function storeUsersData(event) 
{
    event.preventDefault(); // Prevent form submission
    let form = event.target;
    let firstName = form .querySelector("#fname").value;
    let email = form.querySelector("#email").value;
    let username = form.querySelector("#username").value;
    let password = form.querySelector("#password").value;
}