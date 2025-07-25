

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
    username;


    constructor(width, height, hedingtext, maintext, backgroundcolor, headingcolor, textcolor, headingfont, textfont, headingfontsize, textfontsize, designstyle, username) {
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
        this.username = username;
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

export class emailBanner
{
    width;
    minHeight;
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
    image;
    username;


    constructor( width, minHeight,hedingtext, maintext, backgroundcolor, headingcolor, textcolor, headingfont, textfont, headingfontsize, textfontsize, designstyle, image, username) {
        this.width = width;
        this.minHeight = minHeight;
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
        this.image = image;
        this.username = username;
    }
}

export class LandingPage 
{
    width;
    minHeight;
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
    image;
    username;


    constructor( width) {

    }
}