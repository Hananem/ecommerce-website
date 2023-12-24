
import services from "../data/servicesdata"

const Services =() => {
    return(
<section className="w-4/5    mx-auto  mt-16">
<h2 className="text-primary font-bold hover:underline text-4xl mb-4">Services</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {
      services.map((service) => {
        return(
          <article key={service.id} className="flex items-center gap-2">
          <div className="bg-gray-300 w-[38px] h-[38px] text-primary text-[20px] rounded-full grid place-items-center ">
          {service.icon}  
           
          </div>
          <span>
          <h6 className="text-primary font-medium text-xl"> {service.title} </h6>
                <p className="text-slate-500  text-[12px]"> {service.subtitle}</p>
          </span>
               
          </article>
        )
      })
    }
   </div>
</section>
    )

}
 export default Services