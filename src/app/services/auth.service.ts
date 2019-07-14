export class AuthService {
    isAuth: boolean;
    /**
     *
     */
    username:string;
    users: Array<User>;
    constructor() {
        this.users = [
            new User("Damien", "Jojo"),
            new User("Chaudois", "P4$$w0rd")
        ];

        this.isAuth = false;
    }
    logout(){
        this.isAuth=false;
    }
    login(login: string, pwd: string) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.users.forEach(element => {
                            if (element.login === login && element.pwd === pwd){
                                this.isAuth = true;
                                this.username=login;
                            } 
                        });
                        resolve(this.isAuth);
                    },2000
                );
            }
        );
    }
}
class User {
    /**
     *
     */
    constructor(login: string, pwd: string) {
        this.login = login;
        this.pwd = pwd;
    }
    login: string;
    pwd: string
}