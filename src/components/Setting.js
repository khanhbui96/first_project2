import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
const mapStateToProps = state => {
  return {
    keyword: state.keyword
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onInsertKeyword: keyword => {
      dispatch(actions.insertKeyword(keyword));
    },
    openForm: () => {
      dispatch(actions.openForm());
    },
    onRepair: task => {
      dispatch(actions.repairTask(task));
    },
    sortAToZ: () => {
      dispatch(actions.sortAToZ());
    },
    sortZToA: () => {
      dispatch(actions.sortZToA());
    },
    onInsertKeyword: keyword => {
      dispatch(actions.insertKeyword(keyword));
    }
  };
};
class Setting extends Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onClickAddTask = this.onClickAddTask.bind(this);
    this.onSortAZ = this.onSortAZ.bind(this);
    this.onSortZA = this.onSortZA.bind(this);
    this.onFilterKeyword = this.onFilterKeyword.bind(this);
  }
  onFilterKeyword(e) {
    console.log(e.target.value);
    this.props.onInsertKeyword(e.target.value);
  }
  onSortAZ(e) {
    this.props.sortAToZ();
  }
  onSortZA() {
    this.props.sortZToA();
  }
  onClickAddTask() {
    this.props.openForm();
    this.props.onRepair({});
  }
  onHandleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onInsertKeyword(this.state.keyword);
  }
  onHandleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }
  render() {
    return (
      <div className="">
        <div>
          <div className="">
            <button
              className="btn btn-primary float-left"
              onClick={this.onClickAddTask}
            >
              <i className="fas fa-plus mr-2" />
              Add Tasks
            </button>
          </div>
        </div>
        <div className="clearfix" />
        <div className="row mt-2">
          <div className="d-flex ml-3">
            <form className="d-flex" onSubmit={this.onHandleSubmit}>
              <input
                className="form-control"
                name="keyword"
                onChange={this.onHandleChange}
              />

              <button className="btn btn-primary mr-4">
                <i className="fas fa-search mr-2" />
                Search
              </button>
            </form>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Range
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <button
                  className="dropdown-item"
                  value="AZ"
                  onClick={this.onSortAZ}
                >
                  A-Z
                </button>
                <button
                  className="dropdown-item"
                  value="ZA"
                  onClick={this.onSortZA}
                >
                  Z-A
                </button>
                <div className="dropdown-divider" />
                <button
                  className="dropdown-item"
                  value="hide"
                  onClick={this.onFilterKeyword}
                >
                  Hide
                </button>
                <button
                  className="dropdown-item"
                  value="active"
                  onClick={this.onFilterKeyword}
                >
                  Active
                </button>
                <button
                  className="dropdown-item"
                  value="all"
                  onClick={this.onFilterKeyword}
                >
                  All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
