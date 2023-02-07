select 
  users.email 
from 
  users 
  inner join purchases on purchases.buyer = users.id
where 
  purchases.product = 1