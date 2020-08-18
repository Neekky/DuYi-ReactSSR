import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '@/pages/Home'
import Movies from '@/pages/Movies'
import NotFound from '@/pages/NotFound'

export default function RouteApp() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route component={NotFound} />
        </Switch>
    )
}
