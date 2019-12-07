import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const [item, setItem] = useState({desc:'' ,date:''});
  const [todos, setTodos] = useState([]);

  const inputChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos ([...todos,item])
  }

  const Delete = (event) => {
    event.preventDefault();
    setTodos(todos.filter((item,index) => index !== parseInt(event.target.id)));
  }
  
  return (
    <div className="App">
      <form onSubmit = {addTodo}>
        <input type ="date" name ='date' value ={item.date} onChange = {inputChange}/>
        <input type ="text" name ='desc' value ={item.desc} onChange = {inputChange}/>
        <input type = "submit" value ="Add"/>
      </form>

      <TodoTable todos = {todos} Delete = {Delete}/>

    </div>
  );
}

export default App;
