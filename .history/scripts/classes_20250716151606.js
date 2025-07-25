

export class Banner 
{
    width;
    height;
    

    textcolor;
    backgroundcolor;
    font;

    constructor(width, height, textcolor, backgroundcolor, font) {
        this.width = width;
        this.height = height;
        this.textcolor = textcolor;
        this.backgroundcolor = backgroundcolor;
        this.font = font;
    }
}
export class User
{
 firstName;
 email;
 username;
 password;
    constructor(firstName, email, username, password) {
        this.firstName = firstName;    
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
