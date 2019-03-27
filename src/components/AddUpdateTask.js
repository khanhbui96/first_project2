import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    taskRepair: state.taskRepair
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSave: task => {
      dispatch(actions.addTask(task));
    },
    onEdit: (task, newTask) => {
      dispatch(actions.editTask(task, newTask));
    },
    closeForm: () => {
      dispatch(actions.closeForm());
    },
    toggleForm: () => {
      dispatch(actions.toggleForm());
    }
  };
};
class AddUpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "hide"
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
    this.onHandleChangeStatus = this.onHandleChangeStatus.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
  }
  createGuid = () => {
    let s4 = () => {
      return Math.floor((Math.random() + 1) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return s4() + s4() + s4() + s4();
  };
  onClickClose() {
    this.props.closeForm();
  }
  onHandleChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }
  onHandleChangeName(e) {
    this.setState({
      id: this.createGuid(),
      name: e.target.value
    });
  }
  onHandleSubmit(e) {
    e.preventDefault();
    if (this.props.taskRepair.id) {
      this.props.onEdit(this.props.taskRepair, this.state);
    } else {
      this.props.onSave(this.state);
    }
    this.setState({
      name: ""
    });
    this.props.toggleForm();
  }
  componentDidMount() {
    this.setState(this.props.taskRepair);
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.taskRepair);
  }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <div className="card border-warning mb-3" Style="max-width: 18rem;">
          <div className="alert alert-warning mb-0 text-center">
            Add tasks
            <span
              className="fa fa-times-circle text-right float-right"
              onClick={this.onClickClose}
            />
          </div>
          <div className="card-body">
            <label for="name" className="mb-0">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onHandleChangeName}
              id="name"
            />
            <label for="status" className="mb-0 mt-2">
              Status
            </label>
            <select
              className="form-control"
              name="status"
              onChange={this.onHandleChangeStatus}
            >
              <option value="hide" selected>
                hide
              </option>
              <option value="active">active</option>
            </select>
            <div className="mt-4">
              <button type="submit" class="btn alert-warning mr-4">
                <i className="fas fa-plus mr-2" />
                Save
              </button>

              <button type="button" class="btn alert-danger">
                <i className="fas fa-times mr-2" />
                Exit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUpdateTask);
