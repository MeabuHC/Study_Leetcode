# Write your MySQL query statement below
SELECT A.machine_id, ROUND(AVG(B.timestamp - A.timestamp),3) AS processing_time
FROM Activity AS A INNER JOIN Activity AS B ON A.process_id = B.process_id AND A.machine_id = B.machine_id
WHERE A.activity_type = "start" AND B.activity_type = "end"
GROUP BY A.machine_id
