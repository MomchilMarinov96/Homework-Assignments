let userManager = (function(){

    class User {

        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    
    }
    
    
    class UserManager {
    
        constructor() {
            //                  deserialization
            let storedUsers = JSON.parse(localStorage.getItem('users'));
            this.users = storedUsers || [];
        }
    
        /**
         * Checks if the supplied credentials are matching some
         * of the users
         * @param {*} username 
         * @param {*} password 
         * @returns 
         */
        validateCredentials(username, password) {
            return this.users.some(user => user.username === username && 
                                           user.password === password 
            );
        }
    
        addUser(username, password) {
            if(!this.checkForExistingUser(username)) {
                this.users.push(new User(username, password));
                //                            serialization of the users
                localStorage.setItem('users', JSON.stringify(this.users));

                return true;
            }
            return false;
        }
    
        checkForExistingUser(username) {
            return this.users.some(user => user.username === username);
        }
    
    }

    return new UserManager();

})()
