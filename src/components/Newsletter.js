import {HiOutlineMailOpen} from "react-icons/hi"

const Newsletter = () => {
    return(
  <section className="bg-smallTextColor w-full text-white mt-16">
    <div className="w-4/5 mx-auto  grid grid-cols-1 md:grid-cols-2  py-4">

   
       <div className="flex items-center gap-2  max-w-[560px] ">
        <HiOutlineMailOpen className="text-[60px] "  />
        <div>
            <h2 className=" text-xl md:text-2xl  " >Sign up To Our Newsletter</h2>
            <p  className="text-[17px]  ">.. and receive $20 coupon for first shopping</p>
        </div>
       </div>
       <form className="">
       <div className=" flex items-center justify-between bg-white border  rounded-sm">
            <input
              type="text"
              className="px-4 py-1 border-none bg-transparent  rounded-md outline-none"
              placeholder="Email address..."
            />
            <button className="p-2 rounded-md btn btn-primary">
              SUBSCRIBE
            </button>
          </div>
       </form>
   
    </div>
  </section>
    )
}

export default Newsletter