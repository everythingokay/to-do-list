import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    };
    handleRemove() {
        this.props.remove(this.props.id)
    };
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    };

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form>
                        <input type="text"></input>
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