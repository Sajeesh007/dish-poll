export const FETCH = {
    START: "FETCH_START",
    SUCCESS: "FETCH_SUCCESS",
    ERROR: "FETCH_ERROR"
}


export const fetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH.START:
            return{
                loading: true,
                error: {type: false},
            }
        case FETCH.SUCCESS:
            return{
                loading: false,
                error: {type: false}
            }
        case FETCH.ERROR:
            return{
                loading: false,
                error: {type: true, message: action.payload}
            }
        default:
            return state
    }
}

export const DISH = {
    ADD: "DISH_ADD",
    VOTE: {
        FIRST: "VOTE_FIRST",
        SECOND: "VOTE_SECOND",
        THIRD: "VOTE_THIRD",
        REMOVE: "VOTE_REMOVE"
    }
}


export const dishReducer = (state, action) => {
    switch (action.type) {
        case DISH.ADD:
            const user = JSON.parse(localStorage.getItem("user"))
            if(user.rank1 !== null || user.rank2 !== null || user.rank3 !== null ){
                return action.payload.map((item)=> {
                    return {
                        ...item,
                        rank: user.rank1 == item.id ? 1 : user.rank2 == item.id ? 2 : user.rank3 == item.id ? 3 : 1000,
                        point: user.rank1 == item.id ? 30 : user.rank2 == item.id ? 20 : user.rank3 == item.id ? 10 : 0
                    }
                }).sort((a, b) => a.rank - b.rank)
            }
            return action.payload
            
        case DISH.VOTE.FIRST:
            localStorage.setItem("user", JSON.stringify({...JSON.parse(localStorage.getItem("user")), rank1: action.payload}))
            const oldFirst = state.filter((item)=> item.rank == 1)
            const dish1 =  state.map((item)=> { 
                if (oldFirst.length > 0 && item.id == oldFirst[0].id) 
                    return {
                        ...item,
                        rank: 1000,
                        point: 0
                    }
                else if(item.id == action.payload)
                    return {
                        ...item,
                        rank: 1,
                        point: 30
                    } 
                else
                    return item
                
            }).sort((a, b) =>  a.rank - b.rank)

            return dish1
            
        case DISH.VOTE.SECOND:
            localStorage.setItem("user", JSON.stringify({...JSON.parse(localStorage.getItem("user")), rank2: action.payload}))
            const oldSecond = state.filter((item)=> item.rank == 2)
            const dish2 = state.map((item)=> { 
                if (oldSecond.length > 0 && item.id == oldSecond[0].id)
                    return {
                        ...item,
                        rank: 1000,
                        point: 0
                    }
                else if(item.id == action.payload)
                    return {
                        ...item,
                        rank: 2,
                        point: 20
                    } 
                else 
                    return item
            })

            return dish2.sort((a, b) => a.rank - b.rank)

        case DISH.VOTE.THIRD:
            localStorage.setItem("user", JSON.stringify({...JSON.parse(localStorage.getItem("user")), rank3: action.payload}))
            const oldThird = state.filter((item)=> item.rank == 3)
            const dish3 = state.map((item)=> { 
                if (oldThird.length > 0 && item.id == oldThird[0].id) 
                    return {
                        ...item,
                        rank: 1000,
                        point: 0
                    }
                else if(item.id == action.payload)
                    return {
                        ...item,
                        rank: 3,
                        point: 10
                    } 
                else 
                    return item
                
            })

            return dish3.sort((a, b) => a.rank - b.rank )
 
        default:
            return state
    }
}