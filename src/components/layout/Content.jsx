import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Portfolio from '../../views/examples/Portfolio'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'


const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/portfolio">
                <Portfolio />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route path="/sobre">
                <About />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content