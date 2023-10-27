import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import hashPassword from '../utils/hashPassword.js';

const userControllers = {
    userRegister: (req, res) => {
        const { email, password, rePassword } = req.body;

        //check if email exist
        const emailExist = User.getUserByEmail(email);

        if (!emailExist) {
            //validate user entries
            const emailValid = validateEmail(email);
            const passwordValid = validatePassword(password);
            const matchedPasswords = matchPasswords(password, rePassword);
            if (emailValid && passwordValid && matchedPasswords) {
                const hashedPassword = hashPassword(password);
                const newUser = new User(email, hashedPassword);
                newUser.addUser();
                res.status(201).json({
                    message: `A user with email ${email} ${hashedPassword} ${email}has created successful`
                });
            } else {
                res.status(400).json({
                    message: 'Email or Password is not valid'
                });
            }
        } else {
            res.status(409).json({ message: 'user Email already exist' });
        }
    },
    userLogin: (req, res) => {
        const { email, password } = req.body;
        //check if email exist
        const emailExist = User.getUserByEmail(email);
        if (emailExist) {
            bcrypt.compare(
                password,
                emailExist.password,
                (err, passwordIsValid) => {
                    if (passwordIsValid) {
                        const token = jwt.sign(
                            { user: emailExist },
                            process.env.JWT_SECRET
                        );
                        res.cookie('userId', emailExist.id);
                        res.cookie('token', token, { httpOnly: true });
                        res.status(200).json({
                            token: token,
                            id: emailExist.id
                        });
                    } else {
                        res.status(409).json({
                            message: 'Email or Password is not valid'
                        });
                    }
                }
            );
        } else {
            res.status(409).json({ message: 'Email is not exist' });
        }
    }
};

export default userControllers;
