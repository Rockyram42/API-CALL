import React, { Component } from "react";

export default class Chat1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelClick = this.handelClick.bind(this);
    // console.log(props);
  }

  handleInputChange = (e) => {
    this.setState({
      msg: [e.target.value],
    });
  };

  handelClick = (e) => {
    e.preventDefault();
    this.props.parentCallback1(this.state.msg);
    this.setState({
      msg: "",
    });
  };
  render() {
    return (
      <div className="w-25 mr-auto ml-auto mt-3">
        <form>
          <div
            className="form-group position-relative"
            style={{ display: "flex" }}
          >
            <input
              type="text"
              className="form-control"
              style={{ paddingRight: "70px" }}
              id="msg"
              value={this.state.msg}
              onChange={this.handleInputChange}
            />
            <button
              className="btn btn-primary position-absolute"
              style={{ right: "5px", margin: "4px", padding: "2px" }}
              onClick={this.handelClick}
            >
              Send1
            </button>
          </div>
        </form>
      </div>
    );
  }
}
