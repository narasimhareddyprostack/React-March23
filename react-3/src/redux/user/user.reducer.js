import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'
let intialState = {
    users: []
}
let userReducer = (state = intialState, action) => {

    switch (action.type) {
        case 'USER_REQ':
            return {}
        case 'USER_SUCCESS':
            return { users: action.payload }
        case 'USER_FAILURE':
            return {}
        default:
            return state
    }


}

export { userReducer }