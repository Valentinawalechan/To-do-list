import React, {useState} from "react";
import './App.css';
import Form from "./Form.js";
import TodoList from "./TodoList.js";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>What do you have to do?</h1>
          </header>
          <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
          <TodoList todos={todos} setTodos={setTodos} />
      <footer>
          Coded by <a href="https://github.com/Valentinawalechan/My-dictionary-app" target="_blank" rel="noreferrer"> Valentina Di Santo</a> 
        </footer>
        </div>
    </div>
  );
}

export default App;
