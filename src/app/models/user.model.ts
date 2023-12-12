export class User {
    id:number;
    mail_user:string;
    alias_user:string;
    password_user:string;
    picture_user:string;

    constructor(id:number,mail_user:string,alias_user:string,password_user:string,picture_user:string){
        this.id = id;
        this.mail_user = mail_user;
        this.alias_user = alias_user;
        this.password_user = password_user;
        this.picture_user = picture_user;
    }

}
