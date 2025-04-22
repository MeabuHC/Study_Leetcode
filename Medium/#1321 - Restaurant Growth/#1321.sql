# Write your MySQL query statement below
SELECT *
FROM 
    (SELECT DISTINCT visited_on, 
        SUM(amount) OVER(ORDER BY visited_on RANGE BETWEEN INTERVAL 6 DAY preceding AND CURRENT ROW) as amount,
        ROUND(SUM(amount) OVER(ORDER BY visited_on RANGE BETWEEN INTERVAL 6 DAY preceding AND CURRENT ROW) / 7,2) as average_amount
    FROM Customer) as cte
WHERE cte.visited_on IN (
    SELECT DISTINCT visited_on
    FROM Customer
    WHERE DATE_SUB(visited_on, INTERVAL 6 DAY) >= (SELECT MIN(visited_on) FROM Customer)
)


