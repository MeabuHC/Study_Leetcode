SELECT DISTINCT num as ConsecutiveNums 
FROM (
    SELECT *, 
           LEAD(num) OVER (ORDER BY id) AS next_num,
           LEAD(num, 2) OVER (ORDER BY id) AS next_of_next_num
    FROM Logs
) AS subquery
WHERE num = next_num AND num = next_of_next_num;
