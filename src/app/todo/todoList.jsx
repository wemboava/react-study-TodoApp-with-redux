import React from 'react'

import IconButton from '_app/template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map( todo => (
            <tr key={todo.id}>
                <td>
                    {todo.description}
                </td>
                <td>
                    <IconButton style='success' icon='check' onClick={ () => props.handleMarkAsDone(todo) } />
                    <IconButton style='warning' icon='undo' onClick={ () => props.handleMarkAsPending(todo) } />
                    <IconButton style='danger' icon='trash' onClick={ () => props.handleRemove(todo) } />
                </td>
            </tr>

            )
        )
    }
    
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}