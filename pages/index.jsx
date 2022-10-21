import { useEffect, useReducer } from "react"

import { fetchReducer } from "@/store/reducer"
import { useDishContext } from "@/store/Context"
import { fetchDishes } from "utils/helper"

import DishCard from "@/components/DishCard"

export default function Home() {

  const {dish, dishDispatch} = useDishContext()

  const [fetchState, fetchDispatch] = useReducer(fetchReducer, {loading: false, error: false})

  useEffect(() => {
    fetchDishes(fetchDispatch, dishDispatch)
  }, [])

  return (
    <div className='flex flex-col pt-4 justify-center items-center min-h-screen bg-indigo-200'>
      <h2 className="text-5xl">Dishes</h2>
      <div className="grid grid-cols-4 gap-10 py-6">
        {dish?.map((item) => 
          <DishCard key={item.id} id={item.id} name={item.dishName} desc={item.description} image={item.image} rank={item.rank} dishDispatch={dishDispatch}/>
          )}
      </div>
    </div>
  )
}
