import './TodoForm.css'
import React from 'react'

function TodoForm(){
    return(
        <form
            onSubmit={(event)=>{
                event.preventDefault();
            }}
        >
            <label>Escribe tu nueva tarea</label>
            <textarea
                placeholder='Cortar cebolla para el almuerzo'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type=''
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