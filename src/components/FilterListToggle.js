const  FilterListToggle = ({options,value, selectToggle}) => {
    return (
     <section className="">
     {
      options.map(({label, id, value}) => (
                <button
       value={value}
       ke={id}
       onChange={selectToggle}
       >
        {label}
       </button>
      ))
     }
     
   </section>
    )
   }
   
   export default FilterListToggle