'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

const HeaderNavigation=()=>{
    const pathname=usePathname();
    return(
        <div>
            <h1 className="text-2xl m-8">Navigation</h1>
            <Link href="/" className={`${pathname==='/'? 'text-blue-500':'text-white-500'} mr-4`}>Home</Link>
            <Link href="/about" className={`${pathname==='/about'? 'text-blue-500':'text-white-500'} mr-4`}>About</Link>
            <Link href="/contact" className={`${pathname==='/contact'? 'text-blue-500':'text-white-500'} mr-4`}>Contact</Link>
            <Link href="/services" className={`${pathname==='/services'? 'text-blue-500':'text-white-500'} mr-4`}>Services</Link>
        </div>
    )
}

export default HeaderNavigation