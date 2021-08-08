import React from "react";
import "./AddNewTask.css";

export default function AddNewTask () {
    return (
        <form>
            <input type="search" placeholder="Type a new task" />
            <button type="submit"> Add </button> 
        </form>
    )
}