import './TodoForm.css'
import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoForm(){
    const {
        setOpenModal,
        addTodo,
    }=React.useContext(TodoContext);

    const [newTodoValue,setnewTodoValue]=React.useState('');

    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel=(event)=>{
        setOpenModal(false);
    }

    const onChange=(event)=>{
        setnewTodoValue(event.target.value);
    }

    return(
        <form
            onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
                placeholder='Cortar cebolla para el almuerzo'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button--cancel'
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export {TodoForm}