import React from 'react';
import Message from './Message/Message';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './Counter/Counter'
const App = () => {
    return <div>
        <Provider store={store}>
            <h1> App Component</h1>
            <Counter />
        </Provider>
    </div>

}

export default App