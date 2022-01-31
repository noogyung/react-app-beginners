import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from 'react';


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) =>{
    event.preventDefault();
    if (todo ===""){return};
    setTodos((current) => [todo, ...current]);
    setTodo("");    
  }

  return (
    <div className="App">
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder='Write your to do'/>
        <button>Save Todo</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item, index)=> <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
