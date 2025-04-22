# Write your MySQL query statement below

SELECT id, IF(swap_student IS NOT NULL, swap_student, student) as student
FROM 
(
    SELECT *,  IF(id % 2 != 0, LEAD(student, 1) OVER (ORDER BY id), LAG(student,1) OVER (ORDER BY id)) AS swap_student 
    FROM Seat
    ORDER BY id ASC
) AS cte
