import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./NewForm.css";

class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTask({ ...this.state, id: uuidv4(), completed: false });
        this.setState({ task: "" });
    };

    render() {
        return (
            <form className="new-form" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Task</label>
                <input 
                    type="text" 
                    placeholder="new task" 
                    name="task" 
                    id="task" 
                    value={this.state.task}
                    onChange={this.handleChange} />
                <button>Add</button>
            </form>
        );
    };
};

export default NewForm;