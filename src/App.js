import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos=[
  {text:'Cortar Cebolla',completed:true},
  {text:'Tomar el Curso',completed:false},
  {text:'LLorar',completed:false},
  {text:'Dormir',completed:false}
];

function App() {
  const [searchValue, setsearchValue]=React.useState('');
  const [todos, setTodos]=React.useState(defaultTodos);

  const completedTodos=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;
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
        {defaultTodos.map(todo=>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
