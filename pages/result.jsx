import { useEffect, useReducer } from 'react'

import Tab from '@/components/Tab'
import DishCardSmall from '@/components/DishCardSmall'

import { useDishContext } from '@/store/Context'
import { fetchReducer } from '@/store/reducer'
import { fetchDishes } from 'utils/helper'

export default function ResultPage() {

  const {dish, dishDispatch} = useDishContext()

  const [fetchState, fetchDispatch] = useReducer(fetchReducer, {loading: false, error: false})

  useEffect(() => {
    dish.length == 0 && fetchDishes(fetchDispatch, dishDispatch)
  }, [])


  return (
    <div className='flex flex-col pt-4  items-center min-h-screen '>
        <h2 className="text-5xl pb-4 font-bold">Result</h2>
        <Tab />

        <div className='bg-indigo-400 rounded-xl py-4 px-5 flex flex-col space-y-4 mt-4 ' >
          {dish?.map((item, index) => 
            <DishCardSmall key={item.id} id={item.id} index={index + 1} name={item.dishName} desc={item.description}
              image={item.image} point={item.point} rank={item.rank}/>
          )}
        </div>
    </div>
  )
}
