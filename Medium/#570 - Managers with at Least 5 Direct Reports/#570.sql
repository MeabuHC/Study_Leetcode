# Write your MySQL query statement below
SELECT B.name
FROM Employee AS A INNER JOIN Employee as B
ON A.managerId = B.id
GROUP BY B.name, B.id
HAVING COUNT(*) >= 5

