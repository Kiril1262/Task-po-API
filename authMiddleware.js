import jwt from "jsonwebtoken";

const secretKey = "yourSecretKey123";

export const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ message: "Токен відсутній" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Недійсний токен" });
        }

        req.user = user;
        next();
    });
};

export const authorizeRole = (role) => (req, res, next) => {
    if (req.user.role !== role) {
        return res.status(403).json({ message: "Доступ заборонено" });
    }
    next();
};
