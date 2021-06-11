import React, { Component } from "react";
import { connect } from "react-redux";
class BtnChoi extends Component {
  xuLyChoiGame = () => {
    //Nhận lại props
    // const { xuLyKetQua, choiGame } = this.props;
    //gọi xuLyKetQua
    // xuLyKetQua();
    // choiGame();
    const { lacXucXac, xuLyKetQua } = this.props;

    //sau 100ms thì chạy lại hàm
    let i = 0;
    const counter = setInterval(() => {
      // console.log("đã chạy 100ms");
      lacXucXac();

      //Dkien dừng
      i += 1;
      if (i > 9) {
        //dừng setInterval
        clearInterval(counter);
        //tính kqua
        // this.xuLyKetQua();
        xuLyKetQua();
      }
    }, 100);
  };
  render() {
    return (
      <button
        onClick={this.xuLyChoiGame}
        className="btn btn-success"
        style={{ fontSize: 30 }}
      >
        PLAY GAME
      </button>
    );
  }
}
//gửi dl lên store
const mapDispatchToProps = (dispatch) => {
  return {
    lacXucXac: () => {
      const action = {
        type: "LAC_XUC_XAC",
        payload: null,
      };
      //gửi action lên reducer
      dispatch(action);
    },
    xuLyKetQua: () => {
      const action = {
        type: "XU_LY_KET_QUA",
        payload: null,
      };
      //gửi action lên reducer
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(BtnChoi);
