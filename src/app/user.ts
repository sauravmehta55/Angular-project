export class User{
    username : string;
        firstname : string;
        lastname : string;
        age:number;
        password :string;
    constructor(
        username : string,
        firstname : string,
        lastname : string,
        age:number,
        password :string

    ){
        this.username = username;
        this.age = age;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
    }
}