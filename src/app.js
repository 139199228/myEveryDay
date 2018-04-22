import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { AppContainer } from 'react-hot-loader'
// ReactDOM.render(<App />,document.getElementById('root'))

const root = document.getElementById('root')
const Render = App => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        root
    )
}
Render(App)
if(module.hot){
    module.hot.accept('./App.jsx',() => {
        const Next = require("./App.jsx").default
        Render(Next)
    })
}