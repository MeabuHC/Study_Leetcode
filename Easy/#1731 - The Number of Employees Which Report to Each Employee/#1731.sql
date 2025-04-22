# Write your MySQL query statement below
SELECT B.employee_id, B.name, COUNT(*) AS reports_count, ROUND(AVG(A.age)) AS average_age
FROM Employees A INNER JOIN Employees B ON A.reports_to = B.employee_id
GROUP BY B.employee_id, B.name
ORDER BY B.employee_id 