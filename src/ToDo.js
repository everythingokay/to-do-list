import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: ""
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    };
    handleRemove() {
        this.props.remove(this.props.id)
    };
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    };
    handleUpdate(evt) {
        evt.preventDefault();
    };

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                        type="text" 
                        value={this.state.task} 
                        name="task" 
                        onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
            <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handleRemove}>Delete</button>
                <li>{this.props.task}</li>
            </div>
            );
        };
        return result;
    };
};

export default ToDo;