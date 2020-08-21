import React from 'react'
import Header from '../components/Header'

export default function _app({ Component, ...props }) {
    return (
        <div>
            <h1>模板哈哈</h1>
            <Header />
            <Component {...props} />
        </div>
    )
}