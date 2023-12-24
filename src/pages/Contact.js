import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FaFacebook, FaTwitter} from "react-icons/fa"
import {SiInstagram} from "react-icons/si"
import {ImLocation} from "react-icons/im"

const  Contact = () => {
    return (
     <section className=" min-h-screen sm:py-[10rem] flex justify-center items-center  px-8">
   
          <div className=" flex flex-col md:flex-row md:space-x-6  space-y-6   md:space-y-0 bg-primary w-full max-w-4xl p-8 rounded-xl shadow-2xl  text-white">
            
              <div className="flex flex-col justify-between">
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-[#dddaeb]text-sm">Contact us for more information lorem lorem lorem lorem </p>
              </div>
              <div>
              <div className="flex items-center gap-x-1">
              <span>
                <BsFillTelephoneFill />
              </span>
                <p>+(123) 456 84712</p>
              </div>
             
              <div className="flex items-center gap-x-1">
              <span>
                <MdEmail />
              </span>
                <p>Digitic@gmail.com</p>
              </div>

              <div className="flex items-center gap-x-1">
              <span>
                <ImLocation />
              </span>
                <p>14, Street 342, Adfr Cer</p>
              </div>
              </div>
<div className="flex items-center space-x-6">
<FaFacebook/>
<FaTwitter />
<SiInstagram />
</div>
              </div>
       
       
         <div className="bg-white rounded-xl shadow-lg p-8">
           
            <form  className="flex flex-col space-y-4 text-gray-600">
                
                <div><label className="text-sm">Your name</label>
                <input type="text" placeholder="your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:headingColor"/>
                </div>
            
             
                <div><label className="text-sm">Email Address</label>
                <input type="text" placeholder="email address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:headingColor"/>
                </div>
              
                <div><label className="text-sm">MESSAGE</label>
                <textarea type="message"  
                rows="4"
                 placeholder="your name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:headingColor"></textarea>
                </div>


                <button className="inline-block bg-primary text-white px-6 py-4 font-bold">
                  SEND YOUR MESSAGE
                </button>
             
            </form>
         </div>
          </div>
    
   </section>
    )
   }
   
   export default Contact