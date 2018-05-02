import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href="#">
                    <i className="far fa-calendar-alt"></i>
                    TodoApp
                </a>
            </div>
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/todos">Tarefas</a></li>
                    <li><a href="#/sobre">Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)