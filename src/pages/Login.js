import {Link} from "react-router-dom"
import google from "../images/google.png"
const Login = () => {
    return(
     <section className="flex items-center justify-center min-h-screen  pt-12">
     <article className=" max-w-3xl p-2 flex items-center justify-center rounded-2xl bg-white mt-12 shadow-lg">
      <div className="flex flex-col p-8 md:p-14">
      <h1 className="mb-3 text-[25px] font-bold text-primary">WELCOME BACK</h1>
      <p className="font-light text-gray-400 mb-8">Welcome back ! Please enter your details </p>
        <form>
        <div>
           <label className="text-colorHeading text-[18px]">Email</label>
           <input type="email" className="w-full p-2 rounded-xl border border-gray-400 placeholder:font-light  "/>
              
           </div>
           <div>
           <label className="text-colorHeading text-[18px]">Password</label>

           <input type="password" className="w-full p-2 rounded-xl border border-gray-400 placeholder:font-light"/>
            
           </div>
       
        </form>
        <div className="flex justify-between w-full py-4">
          <div className="mr-24">
            <input type="checkbox" className="mr-2"/>
            <span>Remember for 30 days</span>
          </div>
          <span className="font-bold text-md text-smallTextColor">Forgot password</span>
        </div>
        <button className="btn btn-primary">
            Login
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
       <Link className="font-bold text-primary" to="/signin">Sign in for free</Link>
       </div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1593344484962-796055d4a3a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" className="h-full hidden rounded-2xl md:block object-cover"/>
      </div>
      </article>
     </section>
    )
}
export default Login