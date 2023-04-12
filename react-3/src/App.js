import React from 'react'
import User from './User/User'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App Compononet.....</h1>
                <User />
            </Provider>
        </div>
    )
}

export default App