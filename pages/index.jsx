import { useEffect, useReducer } from "react"

import { fetchReducer } from "@/store/reducer"
import { useDishContext } from "@/store/Context"
import { fetchDishes } from "utils/helper"

import DishCard from "@/components/DishCard"
import Tab from "@/components/Tab"
import { useRouter } from "next/router"
import Header from "@/components/Header"

export default function Home() {

  const router = useRouter()

  const {dish, dishDispatch} = useDishContext()

  const [fetchState, fetchDispatch] = useReducer(fetchReducer, {loading: false, error: false})

  useEffect(() => {
    dish.length == 0 && fetchDishes(fetchDispatch, dishDispatch)
  }, [])


  return (
    <div className='flex flex-col items-center min-h-screen bg-indigo-200' >
      <Header/>
      <h2 className="text-5xl py-4 font-bold">Dishes</h2>
      <Tab />
      <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 py-6">
        {dish?.map((item) => 
          <DishCard key={item.id} id={item.id} name={item.dishName} desc={item.description} image={item.image} rank={item.rank} dishDispatch={dishDispatch}/>
          )}
      </div>
        {fetchState?.error.type && 
          <div className="flex flex-col justify-center items-center bg-red-500  text-white px-16 space-y-4 py-4 rounded-xl right-0"> 
            <p className="font-bold">Error in fetching details</p> 
            <button onClick={()=> router.reload()} className='bg-red-400 shadow-lg rounded-lg px-6 py-2'>Reload</button>
          </div>}
    </div>
  )
}
