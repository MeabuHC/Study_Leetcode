# Write your MySQL query statement below

WITH latest_price AS (
    SELECT *
    FROM Products
    WHERE (product_id, change_date) IN (
        SELECT product_id, MAX(change_date) 
        FROM Products
        WHERE change_date <= '2019-08-16'
        GROUP BY product_id
    )
), all_product AS (
    SELECT DISTINCT product_id
    FROM Products
)


SELECT all_product.product_id, IF(new_price IS NOT NULL, new_price, 10) price
FROM all_product LEFT JOIN latest_price ON all_product.product_id = latest_price.product_id