import img3 from "../images/catbanner-03.jpg"
import img4 from "../images/catbanner-04.jpg"
import mainimg2 from "../images/main-banner-1.jpg"

const Hero = () => {
    return(

        <section   className=" w-4/5   mx-auto  pt-12">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
      
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
        <img  src={mainimg2} alt="hero"
        className="w-full h-full object-cover rounded-lg" />
        
        <div className="absolute max-w-[470px] md:ml-16 ml-8 top-[50%] -translate-y-[50%] md:space-y-4">
        <span className="text-[#f05011] text-sm">SUPERCHARGED FOR PROS.</span>
      
        <h3 className="text-primary text-5xl">iPad S13+ Pro</h3>
      
        <p className="text-smallTextColor text-base  w-[75%]">From $999.00 or $41.88/mo. for 24mo.</p>
        <button className="bg-headingColor text-base text-white p-4 rounded-2xl">Buy Now</button>
        </div>
        </div>
      
        <div className="relative" >
      
          <img 
             className="w-full h-full object-cover rounded-lg"
           src={img3} alt="hero" />
        <div className="absolute max-w-[470px] md:ml-16 ml-8 top-[50%] -translate-y-[50%] md:space-y-4">
        <span className="text-[#f05011] text-sm">NEW ARRIVAL.</span>
      
        <h4  className="text-primary text-4xl">AirPods Max</h4>
      
        <p className="text-smallTextColor text-base  w-[75%]">Height-fidelity playback & ultra-low distrotion</p>
        </div>
        </div>
      
        <div  className="relative" >
      
      <img
       className="w-full h-full object-cover rounded-lg"
       src={img4} alt="hero" />
        <div className="absolute max-w-[470px] md:ml-16 ml-8 top-[50%] -translate-y-[50%] md:space-y-4">
        <span className="text-[#f05011] text-sm">FREE ENGRAVING.</span>
      
        <h4  className="text-primary text-4xl">Buy iPad Air</h4>
      
        <p className="text-smallTextColor text-base w-[75%]">From $599.00 or $41.88/mo. for 11mo.</p>
        </div>
      </div>
        </div>
      </section>
    )
}

export default Hero