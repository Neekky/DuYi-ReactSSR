import React from 'react'
import RouterApp from '../routes/RouteApp'
import { BrowserRouter } from 'react-router-dom'
import '../assets/global.css'
import { Provider } from 'react-redux';
import makeStore from '../store';

const store = makeStore();

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </Provider>
    )
}
