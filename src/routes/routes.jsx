import React from 'react'
// import { Router, Route, Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Todo from '_app/todo/todo'
import Abolt from '_app/abolt/abolt'

export default props => (
    <Router basename="#">
        <Switch>
            <Route path="/todos" component={ Todo } />
            <Route path="/sobre" component={ Abolt } /> 
        </ Switch>
    </ Router>
)