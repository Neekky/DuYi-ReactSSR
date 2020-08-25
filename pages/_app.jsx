import React from 'react'
import Header from '../components/Header/index'
import './global.css'

export default function _app({ Component, ...props }) {
    console.log(props,'看看props')
    return (
        <div>
            <h1>模板哈哈</h1>
            <Header />
            <Component {...props} />
        </div>
    )
}