import React from 'react'
import IconButton from '_app/template/iconButton'

export default props => {
    const keyHandler = (event) => {
        if (event.key === 'Enter') {
            event.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (event.key === 'Escape') {
            props.handleClear
        } 
    }
    
    return (
        <div role='form' className='todoForm'>
            <div className='col-xs-12 col-sm-9 col-md-10'>
                <input 
                    type="text" 
                    id='description' 
                    className='form-control' 
                    placeholder='Adicione uma tarefa' 
                    onKeyUp={keyHandler}
                    onChange={props.handleChange}
                    value={props.description} />
            </div>
            <div className='col-xs-12 col-sm-3 col-md-2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                <IconButton style='info' icon='search' onClick={props.handleSearch} />
                <IconButton style='default' icon='close' onClick={props.handleClear} />
            </div>
        </div>
    )
}