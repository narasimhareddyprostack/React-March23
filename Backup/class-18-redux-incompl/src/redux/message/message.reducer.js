import { GM, GN } from './message.action'
let initialState = {
    message: "Hello"
}
let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GM':
            return {
                message: "Good Morning"
            }
        case 'GN':
            return {
                message: "Good Night"
            }
        default:
            return state
    }
}
//what is reducer?
//pure function takes two arguments ie state, action
//based on action type reduce will update /create store.
