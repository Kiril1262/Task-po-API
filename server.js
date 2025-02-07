import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./route.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("API працює!");
});

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});

