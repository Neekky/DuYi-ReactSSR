import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routerConfig'
import { renderRoutes } from 'react-router-config'

export default function RouteApp() {
  return (
    <div>
        {renderRoutes(routes)}
    </div>
  )
}
