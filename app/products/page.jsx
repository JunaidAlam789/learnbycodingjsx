//https://product-app-101-server.vercel.app/api/products
import Link from 'next/link'
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
<h1>Product Catalog</h1>
<div>
{products.map(product=>
   <div key={product.name}>
     <Link  href={`/products/${product.name.replace(/\s+/g,"-").toLowerCase()}`}>{product.name}</Link>
    
      </div>
    )}
</div>
{products.map(product=>
   <div key={product.name}>
    {/*  <h1>{product.name}</h1> */}
    <h1><Link  href={`/products/${product.name.replace(/\s+/g,"-").toLowerCase()}`}>{product.name}</Link></h1>
     <Image alt="leeerob" src={product.image} width="500" height="333"/>
     <h3>
   {/*  {product.type} {' '} */}
    ${product.price} {' '}
    {product.isOnStock ? 'Available': 'Out of Stock'} </h3>
    {/*  <h3>{product.image}</h3> */}
      </div>
    )}
</div>
)
}