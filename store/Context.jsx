import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { dishReducer } from './reducer'


const DishContext = createContext()
export function useDishContext(){
    return useContext(DishContext)
}

export default function Context({children}) {

    const router = useRouter()

    const [dish, dishDispatch] = useReducer(dishReducer, [])

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      user == null && router.push('/login')
    }, [])
    


    return (
        <DishContext.Provider value={{
            dish, dishDispatch
        }}>
            {children}
        </DishContext.Provider>
    )
}
