# Write your MySQL query statement below

WITH cte as (
    (SELECT requester_id as id, COUNT(*) as num
    FROM RequestAccepted
    GROUP BY requester_id)

    UNION ALL

    (SELECT accepter_id as id, COUNT(*) as num
    FROM RequestAccepted
    GROUP BY accepter_id)
)

SELECT id, SUM(num) as num
FROM cte
GROUP BY id
ORDER BY SUM(num) DESC
LIMIT 1






