import { useEffect, useReducer } from "react"

import { fetchReducer, FETCH, VOTE, voteReducer } from "@/store/reducer"
import DishCard from "@/components/DishCard"

export default function Home() {

  const [dish, dishDispatch] = useReducer(fetchReducer, {loading: false, error: false, data: []})
  const [vote, voteDispatch] = useReducer(voteReducer, {})

  useEffect(() => {
    fetchDishes()
  }, [])

  const fetchDishes =  async() => {
    dishDispatch({type: FETCH.START})
    await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
    ).then((res) => res.json()
    ).then((data) => 
    dishDispatch({type: FETCH.SUCCESS, payload: data})
    ).catch((err)=>  dishDispatch({type: FETCH.ERROR, payload: "Network error"}))
  }
  
  return (
    <div className='flex flex-col pt-4 justify-center items-center min-h-screen bg-indigo-200'>
      <h2 className="text-5xl">Dishes</h2>
      <div className="grid grid-cols-4 gap-10 py-6">
        {dish.data.map((item) => 
          <DishCard key={item.id} id={item.id} name={item.dishName} desc={item.description} image={item.image} />
          )}
      </div>
    </div>
  )
}
