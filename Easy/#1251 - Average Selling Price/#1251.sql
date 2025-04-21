# Write your MySQL query statement below
SELECT Prices.product_id, IF(ROUND(SUM(units*price)/SUM(units),2) IS NULL, 0, ROUND(SUM(units*price)/SUM(units),2)) AS average_price
FROM Prices LEFT JOIN UnitsSold 
    ON Prices.product_id = UnitsSold.product_id
    AND purchase_date >= start_date AND purchase_date <= end_date
GROUP BY Prices.product_id
