import data from "./object.js"; // Імпортуємо дані

// Отримати всі товари
export const getAllItems = (req, res) => {
    if (!data || !Array.isArray(data.items)) {
        return res.status(500).json({ message: "Помилка сервера: Дані не знайдено" });
    }
    res.status(200).json({ status: data.status, total_items: data.items.length, items: data.items });
};

// Отримати товар за ID
export const getItemById = (req, res) => {
    if (!data || !Array.isArray(data.items)) {
        return res.status(500).json({ message: "Помилка сервера: Дані не знайдено" });
    }

    const id = req.params.id;
    const item = data.items.find(el => el.id === id);

    if (!item) {
        return res.status(404).json({ message: "Товар не знайдено" });
    }

    res.status(200).json(item);
};

// Додати новий товар
export const addItem = (req, res) => {
    if (!data || !Array.isArray(data.items)) {
        return res.status(500).json({ message: "Помилка сервера: Дані не знайдено" });
    }

    const { name, category, price, description, stock, rating } = req.body;

    if (!name || !category || price == null || !description || stock == null || rating == null) {
        return res.status(400).json({ message: "Всі поля є обов’язковими" });
    }

    const newItem = {
        id: (data.items.length + 1).toString(), // ID починається з 1
        name,
        category,
        price: Number(price),
        description,
        stock: Number(stock),
        rating: Number(rating)
    };

    data.items.push(newItem);
    data.total_items = data.items.length; // Оновлення кількості товарів

    res.status(201).json(newItem);
};
// Оновити товар за ID
export const updateItem = (req, res) => {
    if (!data || !Array.isArray(data.items)) {
        return res.status(500).json({ message: "Помилка сервера: Дані не знайдено" });
    }

    const id = req.params.id;
    const itemIndex = data.items.findIndex(el => el.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({ message: "Товар не знайдено" });
    }

    const updatedItem = { ...data.items[itemIndex], ...req.body };

    // Перевірка та конвертація значень у відповідний тип
    if (req.body.price !== undefined) updatedItem.price = Number(req.body.price);
    if (req.body.stock !== undefined) updatedItem.stock = Number(req.body.stock);
    if (req.body.rating !== undefined) updatedItem.rating = Number(req.body.rating);

    data.items[itemIndex] = updatedItem;

    res.status(200).json(updatedItem);
};

// Видалити товар за ID
export const deleteItem = (req, res) => {
    if (!data || !Array.isArray(data.items)) {
        return res.status(500).json({ message: "Помилка сервера: Дані не знайдено" });
    }

    const id = req.params.id;
    const itemIndex = data.items.findIndex(el => el.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({ message: "Товар не знайдено" });
    }

    const [deletedItem] = data.items.splice(itemIndex, 1);
    data.total_items = data.items.length; // Оновлення кількості товарів

    res.status(200).json(deletedItem);
};





