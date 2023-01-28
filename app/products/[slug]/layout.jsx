import '../../../styles/globals.css'
import Navigation from '../../shared/Navbar'
import Link from 'next/link'
export default function ProductLayout({
  children,
}) {
  return (
        <section>
        <Link href={'/products'}>{"Back"}</Link>
        {children}
        </section>
        
       
   
  )
}
