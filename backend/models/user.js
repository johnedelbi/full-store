import { v4 as newId } from 'uuid';

const users = [
    {
        id: '1',
        email: 'test@gmail.com',
        password: '1Test!'
    },
    {
        id: '2',
        email: 'test1@gmail.com',
        password: '$2a$10$lZuN5jYXVH8afDXIlYGeEOlQaGYipBlOoPZtH7M4JaNfrVRySjvC.'
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
