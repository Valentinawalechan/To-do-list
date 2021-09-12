import React from "react";


function Form({inputText, setInputText, todos, setTodos}) {
const inputTextHandler=(e) => {
    console.log(e);
    setInputText(e.target.value);
};
const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id: Math.random()* 1000 }])
}
return (
<div>
<form>
      <input type="text" placeholder="Type new task..." className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
    );
}

export default Form;