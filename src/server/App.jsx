import React from 'react'
import RouterApp from '../routes/RouteApp'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <RouterApp />
        </BrowserRouter>
    )
}
