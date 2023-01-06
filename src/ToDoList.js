import React, { Component } from "react";
import ToDo from "./ToDo";
import NewForm from "./NewForm";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{task: "laundry"}, {task: "dishes"}] };
        this.create = this.create.bind(this);
    };
    create(newToDo) {
        this.setState({
            todos: [...this.state.todos, newToDo]
        });
    };
    // remove() {

    // };

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo task={todo.task} />
        });
        return (
            <div>
                <h1>To-Do List</h1>
                <ul>{todos}</ul>
                <NewForm createTask={this.create} />
            </div>
        );
    };
};

export default ToDoList;