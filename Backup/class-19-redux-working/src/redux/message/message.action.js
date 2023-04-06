//action types
let GM = 'GM'
let GN = 'GN'
let gmAction = () => {
    return { type: GM, bf: 'idly' }
}
let gnAction = () => {
    return { type: GN, dinner: 'biryani' }
}

export { gmAction, gnAction, GM, GN }