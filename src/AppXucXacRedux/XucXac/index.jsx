import React, { Component } from "react";

class XucXac extends Component {
  render() {
    const { xucxac } = this.props;
    return <img src={xucxac.hinhAnh} width={50} height={50} alt="hinh" />;
  }
}
export default XucXac;
