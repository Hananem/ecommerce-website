
import {Link} from "react-router-dom"
import google from "../images/google.png"

const Signin = () => {
    return(
        <section className="flex items-center justify-center  min-h-screen pt-12">
        <article className="flex items-center justify-center p-2 bg-white mt-12 shadow-lg rounded-2xl">
        <div>
           <img src="https://images.unsplash.com/photo-1606171687430-ab21e12b3273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80
" className="h-full hidden rounded-2xl md:block object-cover"/>
         </div>
         <div className="flex flex-col p-8 md:p-14">
         <h1 className="mb-3 text-[25px] font-bold text-primary">SIGN IN</h1>
         <p className="font-light text-gray-400 mb-8">Create your account. it's free and only take a minute </p>
           <form className="flex flex-col gap-2"  >
           <div>
           <label className="text-colorHeading text-[18px]">Email</label>
           <input type="email" className="w-full p-2 rounded-md border rounded-xl border border-gray-400 placeholder:font-light  "/>
              
           </div>
           <div>
           <label className="text-colorHeading text-[18px]">Password</label>

           <input type="password" className="w-full p-2 rounded-md border rounded-xl border border-gray-400 placeholder:font-light"/>
            
           </div>

          
           </form>
           <div className="flex justify-between w-full py-4">
             <div className="mr-24">
               <input type="checkbox" className="mr-2"/>
               <span>I accept the <Link className="text-primary">Terms of Use</Link> & <Link className="text-primary">Privacy Policy</Link></span>
             </div>
           </div>
           <button className="btn btn-primary ">
               Sign in
          </button>
          < div className="my-4 grid grid-cols-3 items-center text-gray-400 ">
<hr className="border-gray-400"/>
<p className="text-center">OR</p>
<hr className="border-gray-400"/>
</div>
          <button className="bg-black text-white  w-full text-md p-2 rounded-lg mb-6 hover:text-black hover:bg-white hover:border hover:border-black flex items-center justify-center gap-x-2">
          <img src={google} 
            className="w-4 h-4 object-cover"
            alt="logo"
          />  Sign in with google
       </button>
          <div className="text-center text-gray-400">
              Don't have an account?
          <Link className="font-bold text-primary">Sign in for free</Link>
          </div>
         </div>
      
         </article>
        </section>
    )
}

export default Signin