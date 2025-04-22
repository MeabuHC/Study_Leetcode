# Write your MySQL query statement below

(SELECT name AS results
FROM MovieRating mr INNER JOIN Users u ON mr.user_id = u.user_id
GROUP BY mr.user_id, name
ORDER BY COUNT(*) DESC, name ASC
LIMIT 1)

UNION ALL

(SELECT title as results
FROM MovieRating mr INNER JOIN Movies m ON mr.movie_id = m.movie_id
WHERE YEAR(created_at) = 2020 AND MONTH(created_at) = 2
GROUP BY mr.movie_id, title
ORDER BY AVG(rating) DESC, title ASC
LIMIT 1)





