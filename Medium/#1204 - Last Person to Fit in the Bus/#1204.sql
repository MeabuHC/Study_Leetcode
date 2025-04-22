# Write your MySQL query statement below

WITH cte1 AS (
    SELECT *, SUM(weight) OVER (ORDER BY turn ASC) as cummulative_sum
    FROM Queue
)

SELECT person_name
FROM cte1
WHERE cummulative_sum <= 1000
ORDER BY turn DESC
LIMIT 1