# Write your MySQL query statement below

-- SELECT *
-- FROM Sales s INNER JOIN Product p ON s.product_id = p.product_id


SELECT product_id, year as first_year, quantity, price
FROM Sales 
WHERE (product_id, year) IN (
    SELECT product_id, MIN(year)
    FROM Sales
    GROUP BY product_id
)


