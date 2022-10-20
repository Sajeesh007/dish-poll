export const FETCH = {
    START: "FETCH_START",
    SUCCESS: "FETCH_SUCCESS",
    ERROR: "FETCH_ERROR"
}

export const loginReducer = (state, action) => {
    switch (action.type) {
        case FETCH.START:
            return{
                loading: true,
                data: {},
                error: {type: false},
            }
        case FETCH.SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: {type: false}
            }
        case FETCH.ERROR:
            return{
                loading: false,
                data: {},
                error: {type: true, message: action.payload}
            }
        default:
            break;
    }
} 

export const fetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH.START:
            return{
                loading: true,
                data: [],
                error: false,
            }
        case FETCH.SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: false
            }
        case FETCH.ERROR:
            return{
                loading: false,
                data: [],
                error: false
            }
        default:
            break;
    }
}

export const VOTE = {
    START: "FETCH_START",
    SUCCESS: "FETCH_SUCCESS",
    ERROR: "FETCH_ERROR"
}


export const voteReducer = (state, action) => {
    switch (action.type) {
        case FETCH.START:
            return{
                loading: true,
                data: [],
                error: false,
            }
        case FETCH.SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: false
            }
        case FETCH.ERROR:
            return{
                loading: false,
                data: [],
                error: false
            }
        default:
            break;
    }
}