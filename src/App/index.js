import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';

function App() {
  const [searchValue, setsearchValue]=React.useState('');
  const [todos, saveTodos]=useLocalStorage('TODOS_V1',[]);

  const completedTodos=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  const searchedTodos=todos.filter(
    (todo)=>{
      const todoText=todo.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      (todo)=>todo.text===text
    );
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  }

  const deleteTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      (todo)=>todo.text===text
    );
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  }

  return (
    <>

      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
