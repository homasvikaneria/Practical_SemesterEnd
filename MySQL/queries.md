# SQL Practical: MenuItems Table

## 1. Create Table

```sql
CREATE TABLE MenuItems (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(50) UNIQUE,
    price INT NOT NULL,
    category VARCHAR(30)
);
```



## 2.1. Insert Multiple Records

```sql
INSERT INTO MenuItems (item_id, item_name, price, category)
VALUES
    (1, 'Margherita Pizza', 250, 'Pizza'),
    (2, 'Veg Burger', 150, 'Burgers'),
    (3, 'Pasta Alfredo', 300, 'Pasta');
```



## 2.2. Update Item Price

```sql
UPDATE MenuItems
SET price = 180
WHERE item_name = 'Veg Burger';
```



## 2.3. Delete an Item by ID

```sql
DELETE FROM MenuItems
WHERE item_id = 2;
```


## 2.4. Find Average Price

```sql
SELECT AVG(price) AS average_price
FROM MenuItems;
```


## 2.5. Find Total Price of All Items

```sql
SELECT SUM(price) AS total_price
FROM MenuItems;
```
