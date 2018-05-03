import React, { Component } from 'react'
import axios from 'axios'

import Header from '_app/template/header'
import TodoForm from '_app/todo/todoForm'
import TodoList from '_app/todo/todoList'

export default class Todo extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            description: '', 
            list: [
                {
                    description: 'Curso de React',
                    id: 1
                }, 
                {
                    description: 'Lipar o quarto', 
                    id: 2
                }, 
                {
                    description: 'Estudar para a prova', 
                    id: 3
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    
    handleChange(event) {
        this.setState({...this.state, description: event.target.value})
    }

    handleAdd () {

    }

    handleRemove (todo) {

    }

    handleMarkAsDone (todo) {

    }

    handleMarkAsPending (todo) {

    }

    handleSearch () {

    }

    handleClear () {

    }

    render () {
        return (
            <div>
                <Header name='Tarefas' small='Cadastro'></Header>
                <TodoForm 
                    description={this.state.description} 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}
