import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { title, deleteItem, editItem } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-3 text-success" onClick={editItem}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-3 text-danger" onClick={deleteItem}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
