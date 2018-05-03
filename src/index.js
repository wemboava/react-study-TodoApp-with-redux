// import * as bootstrap from '_src/../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '_src/App.jsx'
import reducers from '_app/redux/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('app'))