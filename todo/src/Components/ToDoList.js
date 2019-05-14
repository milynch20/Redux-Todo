import React from "react";
import { connect } from "react-redux";
import { addNewToDo, toggleToDo } from "../Actions";

class ToDoList extends React.Component {
    state = {
        newtodo: ""
    };

    handleChanges = e => {
        this.setState({ newtodo: e.target.value });
    };

    addToDo = (e) => {
        e.preventDefault();
        // debugger;
        this.props.addNewToDo(this.state.newtodo);

    };

    toggleToDo = (e, index) => {
        e.preventDefault();
        this.props.toggleToDo(index);
    };

    render() {
        return (
            <>
                <div className="todo-list">
                    <h1>To Do List!</h1>
                    {this.props.todos.map((todo, index) => (
                        <h4 onClick={e => this.toggleToDo(e,index)} key={index}>
                            {todo.value}
                            {todo.completed}

                        </h4>
                    ))}
                </div>
                <input
                    type="text"
                    value={this.state.newtodo}
                    onChange={this.handleChanges}
                    placeholder="Add new todo"
                />
                <button onClick={this.addToDo}>Add todo</button>
            </>
        );
    }
}

const mapStateToProps = state => ({

    todos: state.todos
});

export default connect( mapStateToProps, { addNewToDo, toggleToDo })(ToDoList);