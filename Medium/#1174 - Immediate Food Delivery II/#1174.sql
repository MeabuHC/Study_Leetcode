WITH min_orders AS (
    SELECT customer_id, MIN(order_date) AS min_order_date
    FROM Delivery
    GROUP BY customer_id
),
first_min_orders AS (
    SELECT d.customer_id, d.order_date, d.customer_pref_delivery_date
    FROM min_orders 
    INNER JOIN Delivery d ON 
        d.customer_id = min_orders.customer_id 
        AND d.order_date = min_orders.min_order_date
)
SELECT ROUND(AVG(IF(first_min_orders.order_date = first_min_orders.customer_pref_delivery_date, 1, 0))*100,2) AS immediate_percentage
FROM first_min_orders;
