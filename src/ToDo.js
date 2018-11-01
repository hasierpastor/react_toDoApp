import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState({ isEdit: !this.state.isEdit });
  }

  render() {
    const { task, key } = this.props;

    return (
      <div key={key} className="Task">
        {task}
        <button onClick={this.props.removeMe}>X</button>
        <button onClick={this.toggleEditForm}>Edit</button>
        {this.state.isEdit ? (
          <NewToDoForm
            task={task}
            editNewTask={this.props.editMe}
            isEdit={true}
          />
        ) : null}
      </div>
    );
  }
}

export default ToDo;
