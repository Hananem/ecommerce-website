import blog from "../data/blogdata"
import {Link} from "react-router-dom"



const  BlogPart = () => {
    return (
     <section className="w-4/5 mx-auto pt-16">
<h2 className="text-primary font-bold hover:underline text-4xl mb-4">Blog</h2>
     
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">

          {
      blog.slice(1,4).map((blog) => {
        return(
        <Link>
          <article key={blog.id} className="rounded w-full bg-white hover:shadow-lg">
          <img src={blog.image}  alt="blog-img" className="w-full h-[16rem]"  />
          <div className="px-8 py-4">
          <h6 className="text-smallTextColor text-xl mb-1 hover:underline"> {blog.title} </h6>
                <p className="text-slate-500"> {blog.content}</p>
          </div>
               
          </article>
          </Link>
        )
      })
    }
          </article>
      
   </section>
    )
   }
   
   export default BlogPart