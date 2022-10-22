import { useEffect, useReducer } from 'react'

import Tab from '@/components/Tab'
import DishCardSmall from '@/components/DishCardSmall'

import { useDishContext } from '@/store/Context'
import { fetchReducer } from '@/store/reducer'
import { fetchDishes } from 'utils/helper'
import { useRouter } from 'next/router'

export default function ResultPage() {

  const router = useRouter()

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

        {fetchState?.error.type && 
          <div className="flex flex-col justify-center items-center bg-red-500  text-white px-16 space-y-4 py-4 rounded-xl mt-8"> 
            <p className="font-bold">Error in fetching details</p> 
            <button onClick={()=> router.reload()} className='bg-red-400 shadow-lg rounded-lg px-6 py-2'>Reload</button>
          </div>}

    </div>
  )
}
