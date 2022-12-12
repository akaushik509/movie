import React from 'react'
import Link from "next/link";
const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"200px"}}>
        <Link href="/">Home</Link>        
        <Link href="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar