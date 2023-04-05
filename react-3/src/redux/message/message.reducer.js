let initialState = {
    msg: "Hello,MR Rahul"
}
let messageReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GM':
            return { msg: "Good Morining" }
        case 'GN':
            return { msg: 'Good Night' }
        default:
            return state
    }

}

export { messageReducer }