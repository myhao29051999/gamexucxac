import React, { Component } from "react";
import BanChoi from "./BanChoi";
import BtnChoi from "./BtnChoi";
import KetQua from "./KetQua";
import "./style.css";

class AppXucXac extends Component {
  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">GAME XÚC XẮC</h3>
          <BanChoi />
        </div>

        <div className="container text-center display-4">
          <KetQua />
          <BtnChoi />
        </div>
      </div>
    );
  }
}

export default AppXucXac;
