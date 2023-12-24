import Shopping from "./Shopping"
import WhichListIcon from "./WhichListICon"
import {NavLink} from "react-router-dom"
import {GoPerson} from "react-icons/go"

const NavbarIcons = () => {
    return(
     <article className=" md:flex flex items-center gap-4">
     <NavLink to="/cart">
    <Shopping />
    </NavLink >

    <NavLink to="/whichlist">
      < WhichListIcon/>
     </NavLink>
     <NavLink>
     <GoPerson className="text-smallTextColor"/>
       
     </NavLink>
      
     </article>
    )
}

export default NavbarIcons