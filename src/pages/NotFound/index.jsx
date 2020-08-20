import React from 'react'

export default function(props) {
    props.staticContext && (props.staticContext.resCode = 404);
    return (
        <div>
            页面有问题
        </div>
    )
}
