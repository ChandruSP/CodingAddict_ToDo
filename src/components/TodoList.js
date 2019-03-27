import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { items, clear, deleteItem, editItem } = this.props;

    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">to do list</h3>
        </ul>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              deleteItem={() => deleteItem(item.id)}
              editItem={() => editItem(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={clear}
        >
          Clear List
        </button>
      </div>
    );
  }
}

export default TodoList;
