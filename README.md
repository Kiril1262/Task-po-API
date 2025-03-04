# API - Item Management

## Опис
Ця документація створена для пояснення використання CRUD-операцій для роботи з товарами. 

### CRUD-операції
- **Отримати всі товари**  
GET http://localhost:3000/api/items
Використовується для отримання повного списку товарів.

- **Отримати товар за ID**  
GET http://localhost:3000/api/items/{id}
Вводите ідентифікатор товару замість `{id}`, щоб отримати детальну інформацію про товар.

- **Додати новий товар**  

POST http://localhost:3000/api/items
Запит повинен містити JSON із наступними обов'язковими полями:
```json
{
  "name": { "uk": "Назва українською", "en": "Назва англійською" },
  "category": { "uk": "Категорія українською", "en": "Категорія англійською" },
  "price": 0,
  "description": "Опис товару",
  "stock": 0,
  "rating": 0
}
* Оновити товар за ID
PATCH http://localhost:3000/api/items/{id}
Вводите ідентифікатор товару замість {id}. Запит може містити одне або кілька оновлених полів у форматі JSON.
* Видалити товар за ID
DELETE http://localhost:3000/api/items/{id}
Вводите ідентифікатор товару замість {id}, щоб видалити його.
# Структура даних
{
  "id": " ", // Прописувати не потрібно, генерується автоматично
  "name": { "uk": "Назва українською", "en": "Назва англійською" },
  "category": { "uk": "Категорія українською", "en": "Категорія англійською" },
  "price": 0,
  "description": "Опис товару",
  "stock": 0,
  "rating": 0
}
# Запуск

* Клонуйте репозиторій:
git clone https://github.com/RuslanTsri/API_practice

* Перейдіть у папку проєкту:
cd API_practice

* Запустіть сервер:
node server.js

*Перевірте роботу API:
Відкрийте браузер та перейдіть за посиланням http://localhost:3000/

Виконав: _Студент групи ІПЗ 23-3_
Виконав: _Капнік Кіріл_

