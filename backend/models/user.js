import { v4 as newId } from 'uuid';

const users = [
    {
        id: '1',
        email: 'test@gmail.com',
        password: '1Test!'
    }
];

class User {
    constructor(email, password) {
        this.id = newId();
        this.email = email;
        this.password = password;
    }

    static getUserById = (id) => {
        return users.find((user) => user.id === id);
    };

    static getUserByEmail = (email) => {
        return users.find((user) => user.email === email);
    };

    addUser = () => {
        users.push(this);
    };
}

export default User;
