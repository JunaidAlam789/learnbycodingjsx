//https://product-app-101-server.vercel.app/api/products

import Image from 'next/image'
import {use} from 'react'
async function getProducts(){
    const res= await fetch("https://product-app-101-server.vercel.app/api/products")
    return res.json()
    }
export default function ProductPage(){
const products= use(getProducts())
return(
<div>
{products.map(product=>
   <div key={product.name}>
     <h1>{product.name}</h1>
    
     <Image alt="leeerob" src={product.image} width="500" height="333"/>
     <h3>
    type: {product.type} {' '}
    price: ${product.price}
    {product.isOnStock} </h3>
     <h3>{product.image}</h3>
      </div>
    )}
</div>
)
}