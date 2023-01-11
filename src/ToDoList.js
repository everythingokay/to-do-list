import React, { Component } from "react";
import ToDo from "./ToDo";
import NewForm from "./NewForm";
import "./ToDoList.css";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggle = this.toggle.bind(this);
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
    update(id, updatedTask) {
        const updatedTasks = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({ todos: updatedTasks });
    };
    toggle(id) {
        const updatedTasks = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({ todos: updatedTasks });
    };

    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            completed={todo.completed} 
            remove={this.remove} 
            update={this.update} 
            toggle={this.toggle} />
        });
        return (
            <div className="todolist">
                <h1>
                    To-Do List <span>A Simple React App</span>
                </h1>
                <ul>{todos}</ul>
                <NewForm createTask={this.create} />
            </div>
        );
    };
};

export default ToDoList;