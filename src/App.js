import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./Form.js";
import TodoList from "./TodoList.js";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState ([]);

  useEffect (() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
  filterHandler();
  saveLocalTodos();
}, [todos, status]);

  function filterHandler() {
    switch(status) {
      case "completed" :
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted" :
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
   localStorage.setItem("todos", JSON.stringify(todos));
    }; 

const getLocalTodos =() => {
  if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
};

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>What do you have to do?</h1>
          </header>
          <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
          <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      <footer>
          Coded by <a href="https://github.com/Valentinawalechan/My-dictionary-app" target="_blank" rel="noreferrer"> Valentina Di Santo</a> 
        </footer>
        </div>
    </div>
  );
  }

export default App;
