import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'
let initialState = {
    users: []
}
let userReducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'USER_REQ':
            return { users: [] }
        case 'USER_SUCCESS':
            return { users: action.payload }
        case 'USER_FAILURE':
            return { users: [] }
        default:
            return state
    }
}


export { userReducer }