# Write your MySQL query statement below

WITH no_of_dept AS (
    SELECT employee_id, COUNT(department_id) AS dept_count
    FROM Employee
    GROUP BY employee_id
)

SELECT e.employee_id, e.department_id
FROM Employee e
INNER JOIN no_of_dept n
    ON e.employee_id = n.employee_id
    AND (
        (n.dept_count = 1 AND e.primary_flag = 'N') OR
        (n.dept_count > 1 AND e.primary_flag = 'Y')
    );

