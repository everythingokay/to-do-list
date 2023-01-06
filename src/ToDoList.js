import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{task: "laundry"}, {task: "dishes"}] };
    };
    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo task={todo.task} />
        });

        return (
            <div>
                <h1>To-Do List</h1>
                <ul>{todos}</ul>
            </div>
        );
    };
};

export default ToDoList;