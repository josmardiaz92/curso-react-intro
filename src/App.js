import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


/* const defaultTodos=[
  {text:'Cortar Cebolla',completed:true},
  {text:'Tomar el Curso',completed:false},
  {text:'LLorar',completed:false},
  {text:'Dormir',completed:false}
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)) */
//localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos=localStorage.getItem('TODOS_V1');
  let parsedTodos;
  
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos=[];
  }else{
    parsedTodos=JSON.parse(localStorageTodos);
  }

  const [searchValue, setsearchValue]=React.useState('');
  const [todos, setTodos]=React.useState(parsedTodos);

  const completedTodos=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  const searchedTodos=todos.filter(
    (todo)=>{
      const todoText=todo.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const saveTodos=(newTodos)=>{
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      (todo)=>todo.text==text
    );
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  }

  const deleteTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      (todo)=>todo.text==text
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
