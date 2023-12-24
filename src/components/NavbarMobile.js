import {Link} from "react-router-dom"


const NavbarMobile = () => {
    return(
      <div className="bg-white w-full h-full shadow-2xl ">
            <ul className="text-center flex flex-col h-full items-center justify-center gap-y-8">
        <li> <Link to="/" className=" text-xl text-smallTextColor font-[600]  hover:border-b hover:border-smallTextColor" >Home</Link></li>
        <li>   <Link to="/store" className="text-xl text-smallTextColor font-[600]  hover:border-b hover:border-smallTextColor">Store</Link></li>

        <li>  <Link to="/blog" className=" text-xl text-smallTextColor font-[600]  hover:border-b hover:border-smallTextColor">Blog</Link></li>
            <li>  <Link to="/contact" className="text-xl text-smallTextColor font-[600]  hover:border-b hover:border-smallTextColor" >Contact</Link></li>
            </ul>
      </div>
    )
}

export default NavbarMobile