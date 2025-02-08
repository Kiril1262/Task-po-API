import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./route.js";
import authRoutes from "./auth.js"; // Новий файл для авторизації

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Головний маршрут
app.get("/", (req, res) => {
    res.send("API працює!");
});

// Маршрути авторизації
app.use("/auth", authRoutes);

// Маршрути CRUD із захистом
app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});

