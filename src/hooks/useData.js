import { useEffect, useState } from "react"

const useData = ()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        const loadData = async()=>{
            try{
                const res = await fetch("news.json")
                const data = await res.json();
                setData(data)
            }
            catch(error){
                console.error(error)
            }
        }
        loadData()
    },[])
    return data;
}
export default useData