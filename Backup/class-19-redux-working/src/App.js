import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Message from './Message/Message'
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <h1>App Component</h1>
                <Message />

            </Provider>
        </div>
    )
}

export default App