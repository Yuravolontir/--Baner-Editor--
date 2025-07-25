

export class Banner 
{
    width;
    height;
    hedingtext;
    maintext;
    backgroundcolor;
    headingcolor;
    textcolor;
    headingfont;
    textfont;
    headingfontsize;
    textfontsize;
    designstyle;



    constructor(width, height, hedingtext, maintext, backgroundcolor, headingcolor, textcolor, headingfont, textfont, headingfontsize, textfontsize, designstyle) {
        this.width = width;
        this.height = height;
        this.hedingtext = hedingtext;
        this.maintext = maintext;
        this.backgroundcolor = backgroundcolor;
        this.headingcolor = headingcolor;
        this.textcolor = textcolor;
        this.headingfont = headingfont;
        this.textfont = textfont;
        this.headingfontsize = headingfontsize;
        this.textfontsize = textfontsize;
        this.designstyle = designstyle;
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
