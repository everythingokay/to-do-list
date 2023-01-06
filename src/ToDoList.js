import React, { Component } from "react";
import ToDo from "./ToDo";
import NewForm from "./NewForm";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    };
    create(newToDo) {
        this.setState({
            todos: [...this.state.todos, newToDo]
        });
    };
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            remove={this.remove} />
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