import Axios from 'axios'
//actoin Types
let USER_REQ = 'USER_REQ'
let USER_SUCCESS = 'USER_SUCCESS'
let USER_FAILURE = 'USER_FAILURE'

let user_Req = () => {
    return { type: USER_REQ }
}
let user_Success = (users) => {
    return { payload: users, type: USER_SUCCESS }
}
let user_Failure = (err) => {
    return { type: USER_FAILURE, payload: err }
}
let user_Action = () => {
    return async (dispatch) => {
        dispatch(user_Req())
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                dispatch(user_Success(resp.data))
            })
            .catch((err) => {
                dispatch(user_Failure(err))
            })

    }
}
export { USER_REQ, USER_SUCCESS, USER_FAILURE, user_Action }

//what is action?
/*
action is a function, it return actionable object
action is a function, it return actionable function
*/
