//https://product-app-101-server.vercel.app/api/products
"use client"
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
    
      </div>
    )}
</div>
)
}