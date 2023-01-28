import Image from "next/image"
async function getProducts(){
   const res= await fetch("https://product-app-101-server.vercel.app/api/products")
   return res.json()
   } 

// getStaticPaths in old JS
export async function generateStaticParams(){
const products=await getProducts()
return products.map(product => ({
slug: product.name.replace(/\s+/g,"-").toLowerCase() 
}))

}  

export default async function Products({params}){
        
   
   const products=await getProducts()
   let item=""
   console.log(params.slug,"slug")
   /* const product_choice= products.map((product)=>{if (params.slug==="laptop")
   return product
   else return product.name; }) */
  // console.log(products,"products")
   function selectProduct(product){
     return product.name.replace(/\s+/g,"-").toLowerCase()===params.slug
   }
   let product_filter= products.filter(product=> {return selectProduct(product)})
  console.log(product_filter,"filter")
return(
<div>
{/* <div>Blogs params.slug {params.slug}</div>
<div>product_filter </div> */}


<div>{product_filter.map(product=>
 
  <div key={product.name}>
   {/* product.name.replace(/\s+/g,"-").toLowerCase() */}
    <h1>{product.name}</h1>
    <Image alt="productImage" src={product.image} width="500" height="333"/>
    <h3>
   Type: {product.type} {' '}
   Price: ${product.price}
   {product.isOnStock} </h3>
    <h3>{product.image}</h3>
    <p>{item}</p>
     </div>
   
   )}
</div>
</div>
)
}