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
            return action.payload
            
        case DISH.VOTE.FIRST:
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