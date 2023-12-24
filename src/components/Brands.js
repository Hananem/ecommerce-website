import brands from "../data/brandsdata"

const Brands = () => {
    return(
<section className="w-4/5   mx-auto my-16">
<h2 className="text-primary hover:underline font-bold text-4xl">Brands</h2>
<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8  gap-10">
    {
     brands.map((brand) => {
        return(
          <article key={brand.id} >
          <img src={brand.image}  alt="blog-img" className="w-full "  />
          </article>
        )
      })
    }
   </div>
</section>
    )
}

export default Brands