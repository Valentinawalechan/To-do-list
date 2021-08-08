import React from "react";
import "./AddNewTask.css";

export default function AddNewTask () {
    function addTask (event) {
        event.preventDefault();
        alert("newTask");
    }

    return (
        <div>
        <form>
        <div className="row">
        <div className="col-8">
        <input type="search" placeholder="Type a new task..." />
        </div>
        <div className="col-4">
            <input type="submit" class="btn btn-primary" value="Add" OnClick={addTask} />
        </div>
        </div>
        </form>
        </div>
    )
}
