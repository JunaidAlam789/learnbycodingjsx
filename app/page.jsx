import Navigation from "./shared/Navbar"
import Link from "next/link"
export default function Page(){

return(
    <>
    <div className={"headerArea"}>
    <Link href={'/products'}>Products</Link>
    </div>

    <div className={"container"}><h1>Welcome to Store!!!</h1></div>
    <div className={"footerArea"}>Footer Area !!!</div>
    </>
)

}