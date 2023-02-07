select 
  purchases.id as 'purchase id', 
  products.title as 'product name', 
  purchases.count, 
  users.email as 'buyer email' 
from 
  users 
  inner join purchases on purchases.buyer = users.id 
  inner join products on purchases.product = products.id 
where 
  users.star = true
