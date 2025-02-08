import express from "express";
import {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
} from "./oper.js";
import { authenticateToken, authorizeRole } from "./authMiddleware.js";

const router = express.Router();

// Головний маршрут
router.get("/", (req, res) => {
    res.send("API працює коректно!");
});

// CRUD-маршрути з аутентифікацією та ролями
router.get("/items", authenticateToken, getAllItems);
router.get("/items/:id", authenticateToken, getItemById);
router.post("/items", authenticateToken, authorizeRole("Admin"), addItem);
router.patch("/items/:id", authenticateToken, authorizeRole("Admin"), updateItem);
router.delete("/items/:id", authenticateToken, authorizeRole("Admin"), deleteItem);

export default router;





