import React from "react";
import "./Todos.css";
import AddNewTask from "./AddNewTask";
import Tasks from "./Tasks";

export default function Todos () {
    return (
        <div>
        <h1>What do you have to do?</h1>
        <AddNewTask />
        <Tasks />
        </div>
        )
}