import React from "react";


function Form({inputText, setInputText, todos, setTodos}) {
function inputTextHandler(event) {
    console.log (event.target.value);
    setInputText(event.target.value);
};
function submitTodoHandler(event) {
    event.preventDefault();
    setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random()* 1000 }]);
setInputText("");
};
return (
<div>
<form>
      <input value={inputText} type="text" placeholder="Type new task..." className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
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