import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this.handleRemove = this.handleRemove.bind(this);
    };
    handleRemove() {
        this.props.remove(this.props.id)
    };

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form>
                        <input type="text"></input>
                    </form>
                </div>
            )
        } else {
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>Delete</button>
                <li>{this.props.task}</li>
            </div>
        };
        return result;
    };
};

export default ToDo;