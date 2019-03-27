import React, { Component, useContext } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    taskRepair: state.taskRepair,
    keyword: state.keyword
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: task => {
      dispatch(actions.deleteTask(task));
    },
    openForm: () => {
      dispatch(actions.openForm());
    },
    onRepair: task => {
      dispatch(actions.repairTask(task));
    },
    onInsertKeyword: keyword => {
      dispatch(actions.insertKeyword(keyword));
    },
    onEdit: (task, newTask) => {
      dispatch(actions.editTask(task, newTask));
    }
  };
};
class ShowTask extends Component {
  constructor(props) {
    super(props);

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onFilterKeyword = this.onFilterKeyword.bind(this);
  }
  onFilterKeyword(e) {
    this.props.onInsertKeyword(e.target.value);
  }
  onChangeStatus(task) {
    return () => {
      var status =
        task.status === "hide"
          ? "active"
          : task.status === "active"
          ? "hide"
          : "active";
      var newTask = { ...task, status: status };
      this.props.onEdit(task, newTask);
    };
  }
  onHandleClickRepair(task) {
    return () => {
      this.props.openForm();
      this.props.onRepair(task);
    };
  }
  render() {
    const { tasks, keyword } = this.props;
    var newTasks = tasks.filter(task => {
      if (keyword === "all") {
        return tasks;
      } else {
        return task.name.indexOf(keyword) !== -1 || task.status === keyword;
      }
    });
    return (
      <table className="table mt-2 table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Range</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" />
            <td>
              <input className="form-control" onChange={this.onFilterKeyword} />
            </td>
            <td>
              <select className="form-control" onChange={this.onFilterKeyword}>
                <option value={"hide"}>hide</option>
                <option value={"active"}>active</option>
                <option value={"all"}>all</option>
              </select>
            </td>
            <td />
            <tr />
          </tr>
          {newTasks.map((task, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>
                <span
                  class={
                    task.status === "active"
                      ? "badge badge-success"
                      : "badge badge-danger"
                  }
                  onClick={this.onChangeStatus(task)}
                >
                  {task.status}
                </span>
              </td>
              <td>
                <div>
                  <button
                    className="btn btn-sm alert-warning mr-2"
                    onClick={this.onHandleClickRepair(task)}
                  >
                    <i className="fas fa-pen mr-2" />
                    Repair
                  </button>
                  <button
                    className="btn btn-sm alert-danger"
                    onClick={() => this.props.onDelete(task)}
                  >
                    <i className="fas fa-trash-alt mr-2" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTask);
