import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Watching video" },
      { id: "todo2", title: "Fixing bugs" },
      { id: "todo3", title: "Finding bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodos;

    currentTodo = currentTodo.filter((item) => item.id !== todo.id); // Ham filter se tra ra 1 [] moi va bo di cai todo hien tai

    this.setState({
      listTodos: currentTodo,
    });

    toast.success("Delete succeed!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;

    // Save
    if (isEmptyObject === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id == todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: "",
      });

      toast.success("Update todo succeed!");

      return;
    }
    // Edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditTodo = (event) => {
    // Copy lai editTodo
    let editTodoCopy = { ...this.state.editTodo };

    editTodoCopy.title = event.target.value;

    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    // <=> listTodos = this.state.listTodos;

    let isEmptyObject = Object.keys(editTodo).length === 0; // length === 0 ? isEmptyObject = true : isEmptyObject = false

    return (
      <>
        <p>Simple ToDo App with ReactJS (Pham Dang Huy)!</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObject === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObject === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
