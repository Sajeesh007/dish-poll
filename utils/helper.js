import { FETCH, DISH } from "@/store/reducer"


export const fetchDishes =  async (fetchDispatch, dishDispatch) => {
    fetchDispatch({type: FETCH.START})
    await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json'
    ).then((res) => res.json()
    ).then((data) => { 
        const dishData = data.map((item)=> { return  {...item, rank: 1000, point: 0}})
        fetchDispatch({type: FETCH.SUCCESS})
        dishDispatch({type: DISH.ADD, payload: dishData})
    }).catch((err)=>  fetchDispatch({type: FETCH.ERROR, payload: "Network error"}))
}