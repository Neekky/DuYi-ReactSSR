import React from 'react'

export default function index(props) {
    return (
        <div>
            <h1>电影详情页</h1>
            {props.router.query.id}
        </div>
    )
}
