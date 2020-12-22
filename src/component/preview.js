import React, { Component } from "react";
import "./style.css";
import Chart1 from "./chat1";
import Chart2 from "./chat2";

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg1: [],
      msg2: [],
    };
    // console.log(props);
  }
  fetchmsgFromChild = (childData) => {
    this.setState({ msg1: this.state.msg1.concat(childData) });
  };
  fetchMsgFromChild2 = (childData2) => {
    this.setState({ msg2: this.state.msg2.concat(childData2) });
  };

  render() {
    const msgRender = this.state.msg1.map((data) => {
      return <p className="msg-bg">{data}</p>;
    });

    const msgRender1 = this.state.msg2.map((data) => {
      return <p className=" msg-bg bg-change">{data}</p>;
    });

    return (
      <div className="">
        <div className="w-25 mr-auto ml-auto mt-5 ">
          <div className="box ">
            <div className="card-body">{msgRender}</div>
            <div className="card-body float-right">{msgRender1}</div>
          </div>
        </div>
        <Chart1 parentCallback1={this.fetchmsgFromChild} />
        <Chart2 parentCallback2={this.fetchMsgFromChild2} />
      </div>
    );
  }
}
