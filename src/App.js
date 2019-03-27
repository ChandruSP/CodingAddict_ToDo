import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    title: '',
    editItem: false
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.title
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      title: '',
      id: uuid(),
      editItem: false
    });
  };

  clearList = e => {
    this.setState({
      items: []
    });
  };

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  editItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      title: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-10 m-4">
            <h3 className="text-capitalize text-center">To do Input</h3>
            <TodoInput
              title={this.state.title}
              handlechange={this.handleChange}
              handlesubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clear={this.clearList}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
