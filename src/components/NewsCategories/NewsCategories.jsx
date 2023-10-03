import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";


const NewsCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        const loadData = async()=>{
            try{
                const res = await fetch("categories.json")
                const data = await res.json();
             
                setCategories(data)
            }
            catch(error){
               console.error(error)
            }
        }
        loadData();
    },[])

   
  return (
    <div>
      <h1 className="font-bold text-xl mb-6">All Category</h1>
      <div className="space-y-2">
        {
            categories.map(category=> <NavLink className="block text-xl p-3 font-medium text-[#9F9F9F] hover:text-black hover:bg-[#d6d5d5] rounded" key={category.id}>{category.name}</NavLink>)
        }
      </div>
    </div>
  )
}

export default NewsCategories
