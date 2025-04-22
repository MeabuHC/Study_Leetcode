# Write your MySQL query statement below



SELECT Department, Employee, salary
FROM (
    SELECT d.name AS Department, e.name AS Employee, salary, 
           DENSE_RANK() OVER (PARTITION BY d.name ORDER BY salary DESC) as rank_salary
    FROM Department d
    INNER JOIN Employee e ON d.id = e.departmentId
) AS ranked
WHERE rank_salary <= 3


