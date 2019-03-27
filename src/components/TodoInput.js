import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const { title, handlechange, handlesubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handlesubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a to do item"
              value={title}
              onChange={handlechange}
            />
          </div>
          {editItem ? (
            <button type="submit" className="btn btn-block btn-success mt-3">
              Edit Item
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-primary mt-3">
              Add Item
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default TodoInput;
