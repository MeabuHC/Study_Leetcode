# Write your MySQL query statement below
SELECT A.id
FROM Weather as A INNER JOIN Weather as B
WHERE DATEDIFF(A.recordDate, B.recordDate) = 1
AND A.temperature > B.temperature