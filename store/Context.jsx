import { createContext, useContext, useReducer } from 'react'
import { dishReducer } from './reducer'


const DishContext = createContext()
export function useDishContext(){
    return useContext(DishContext)
}

export default function Context({children}) {

    const [dish, dishDispatch] = useReducer(dishReducer, [])


    return (
        <DishContext.Provider value={{
            dish, dishDispatch
        }}>
            {children}
        </DishContext.Provider>
    )
}
