import express from "express";
import {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
} from "./oper.js";

const router = express.Router();

// Головний маршрут
router.get("/", (req, res) => {
    res.send("API працює коректно!");
});

// CRUD-маршрути
router.get("/items", getAllItems);
router.get("/items/:id", getItemById);
router.post("/items", addItem);
router.patch("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

export default router;




