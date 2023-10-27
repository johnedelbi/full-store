import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        // verify a token symmetric
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) {
                res.status(498).json({ message: `token is not valid` });
            }
            next();
        });
    } else {
        res.status(498).json({ message: `token is not valid` });
    }
};

export default verifyToken;
