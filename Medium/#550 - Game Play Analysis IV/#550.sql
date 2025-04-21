# Write your MySQL query statement below

WITH first_login AS (
    SELECT * 
    FROM Activity 
    WHERE (player_id, event_date) IN 
        (
        SELECT player_id, MIN(event_date) 
        FROM Activity
        GROUP BY player_id
        )
)

SELECT ROUND(COUNT(*)/(SELECT COUNT(DISTINCT player_id) FROM Activity),2) fraction
FROM first_login fl INNER JOIN Activity a
ON fl.player_id = a.player_id
AND DATE_ADD(fl.event_date, INTERVAL 1 DAY) = a.event_date;
