import {useState} from 'react'
import {Link} from "react-router-dom"

import Shopping from "./Shopping"
import WhichListIcon from "./WhichListICon"
import {NavLink} from "react-router-dom"
import {GoPerson} from "react-icons/go"
import {CgMenuGridO, CgClose} from "react-icons/cg"
import NavbarMobile from "./NavbarMobile"
const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
return(
    <nav className="fixed z-10 left-0 top-0 px-[12%]  md:px-[10%] shadow-lg w-full bg-[#f4edf7]" >
    <div className="flex items-center justify-between  py-2">
     <h1 className="text-primary text-sm md:text-3xl font-bold">DIGITIC</h1>
       <ul className="hidden md:flex items-center gap-x-[2rem]">
        <li><Link to="/" className="text-smallTextColor font-[600] text-[14px] hover:border-b hover:border-smallTextColor">Home</Link></li>
        <li><Link to="/store" className="text-smallTextColor font-[600] text-[14px] hover:border-b hover:border-smallTextColor">Store</Link></li>
        <li><Link to="/blog" className="text-smallTextColor font-[600] text-[14px] hover:border-b hover:border-smallTextColor">Blog</Link></li>
        <li><Link to="/contact" className="text-smallTextColor font-[600] text-[14px] hover:border-b hover:border-smallTextColor">Contact</Link></li>
       </ul>

       <article className=" md:flex flex items-center gap-4 ">
     <NavLink to="/cart">
    <Shopping />
    </NavLink >

    <NavLink to="/whichlist">
      < WhichListIcon/>
     </NavLink>
     <NavLink to="/login" >
     <div className="border border-gray-400 rounded-full w-[30px] h-[30px] grid place-items-center text-[15px] ">
     <GoPerson className="text-gray-400" />
       
     </div>
     </NavLink>
      <span className=" border border-gray-400 rounded-full w-[30px] h-[30px] grid place-items-center text-[15px]  md:hidden" onClick={handleClick}>
      {nav ? <CgClose className="text-gray-400" /> :  <CgMenuGridO className="text-gray-400"/>}
       
      </span>
     </article>

  <div className={`${nav? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
    <NavbarMobile/>
  </div>
   
    </div>
    </nav>
)
    
}

export default Nav
