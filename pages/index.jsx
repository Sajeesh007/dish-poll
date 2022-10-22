import { useEffect, useReducer } from "react"

import { fetchReducer } from "@/store/reducer"
import { useDishContext } from "@/store/Context"
import { fetchDishes } from "utils/helper"

import DishCard from "@/components/DishCard"
import Tab from "@/components/Tab"

export default function Home() {

  const {dish, dishDispatch} = useDishContext()

  const [fetchState, fetchDispatch] = useReducer(fetchReducer, {loading: false, error: false})

  useEffect(() => {
    dish.length == 0 && fetchDishes(fetchDispatch, dishDispatch)
  }, [])


  return (
    <div className='flex flex-col pt-4  items-center min-h-screen bg-indigo-200'>
      <h2 className="text-5xl pb-4">Dishes</h2>
      <Tab />
      <div className="grid grid-cols-4 gap-10 py-6">
        {dish?.map((item) => 
          <DishCard key={item.id} id={item.id} name={item.dishName} desc={item.description} image={item.image} rank={item.rank} dishDispatch={dishDispatch}/>
          )}
      </div>
    </div>
  )
}
