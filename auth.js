import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();
const users = []; // Тимчасове сховище користувачів
const secretKey = "yourSecretKey123"; // Змінити на секретне значення

// Реєстрація нового користувача
router.post("/register", async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        return res.status(400).json({ message: "Всі поля є обов'язковими" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword, role });

    res.status(201).json({ message: "Користувач успішно створений" });
});

// Вхід користувача
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).json({ message: "Користувача не знайдено" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Невірний пароль" });
    }

    const token = jwt.sign({ username: user.username, role: user.role }, secretKey, { expiresIn: "1h" });
    res.status(200).json({ token });
});
export default router;
