import React, { Component } from "react";
import { connect } from "react-redux";

import AddUpdateTask from "./AddUpdateTask";
import Setting from "./Setting";
import ShowTask from "./ShowTask";

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
class TaskApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isDisplayForm } = this.props;
    return (
      <div className="App">
        <div className="">
          <h1>TASKS MANAGER</h1>
          <hr />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div
              className={
                isDisplayForm === true
                  ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                  : ""
              }
            >
              {isDisplayForm ? <AddUpdateTask /> : ""}
            </div>
            <div
              className={
                isDisplayForm === true
                  ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                  : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
              }
            >
              <Setting />
              <ShowTask />
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
)(TaskApp);
