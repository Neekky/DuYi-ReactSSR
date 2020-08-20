import React from 'react'
import { renderRoutes } from 'react-router-config'

export default function Admin({route}) {
    return (
        <div>
            <h1>后台页面</h1>
            <div>
                {renderRoutes(route.routes)}
            </div>
        </div>
    )
}
