import React, { Component } from 'react';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: props.task ? props.task : '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.isEdit
      ? this.props.editNewTask(this.state)
      : this.props.handleNewTask(this.state);
    this.setState({ task: '' });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">ToDo:</label>
        <input
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button>Add a new task to do!</button>
      </form>
    );
  }
} // end

export default NewToDoForm;
