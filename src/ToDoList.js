import uuid from 'uuid/v4';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addTask = this.addTask.bind(this);
  }

  /** Add new box to list. */
  addTask(task) {
    let addMe = { ...task, id: uuid() };
    this.setState(st => ({
      tasks: [...st.tasks, addMe]
    }));
  }

  editTask(id, editedTask) {
    let newTasks = this.state.tasks.map(function(task) {
      return task.id === id ? editedTask : task;
    });
    this.setState({
      tasks: newTasks
    });
  }

  remove(id) {
    this.setState(st => ({
      tasks: st.tasks.filter(task => task.id !== id)
    }));
  }

  /** Render new item form & list of items in cart */
  render() {
    let tasks = this.state.tasks.map(task => (
      <ToDo
        key={task.id}
        task={task.task}
        removeMe={() => this.remove(task.id)}
        editMe={this.editTask.bind(this, task.id)}
      />
    ));
    return (
      <div className="ToDoList">
        <NewToDoForm handleNewTask={this.addTask} />
        <div>{tasks}</div>
      </div>
    );
  }
} // end

export default ToDoList;
