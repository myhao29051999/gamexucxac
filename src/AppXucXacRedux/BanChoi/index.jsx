import React, { Component } from "react";
import { connect } from "react-redux";
import XucXac from "../XucXac";
import { xuLyBanChonAction } from "../../redux/actions/xucXacAction";
class BanChoi extends Component {
  xuLySuKien = (banChon) => {
    console.log(banChon);
    //Nhận lại props xuLyBanChon
    const { xuLyBanChon } = this.props;
    //truyền lại cho AppXucXac giá trị banChon
    xuLyBanChon(banChon);
  };
  renderKetQuaXucXac = () => {
    // Nhận lại props
    const { ketQuaXucXac } = this.props;
    // render ketQuaXucXac ra jsx
    // ? là hỏi ketQuaXucXac có thuộc tính map hay không. Nếu có thì thực hiện map, nếu ko có thì k lm j hết
    return ketQuaXucXac?.map((xucxac, index) => {
      return <XucXac xucxac={xucxac} key={index} />;
    });
  };
  render() {
    // const { ketQuaXucXac } = this.props;
    return (
      <div className="row text-center">
        <div className="col-4">
          <button
            onClick={() => this.xuLySuKien(true)}
            className="bg-danger display-4 p-5 text-light"
            // this.xuLySuKien(true): chạy luôn khi render chạy (Chưa nhấn nút cũng chạy)
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderKetQuaXucXac()}
          </div>
        </div>
        <div className="col-4">
          <button
            onClick={() => this.xuLySuKien(false)}
            className="bg-dark display-4 p-5 text-light"
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    );
  }
}
/**
 * mapDispatchToProps có nghĩa là: truyền dữ liệu từ component lên store
 */
const mapDispatchToProps = (dispatch) => {
  return {
    // key là props của component : value là phương thức gửi data lên store
    xuLyBanChon: (taiOrXiu) => {
      // const action = {
      //   type: "XU_LY_BAN_CHON",
      //   payload: taiOrXiu,
      // };
      const action = xuLyBanChonAction(taiOrXiu);
      dispatch(action);
    },
  };
};
/**
 *
 * @Lấy_Về_ketQuaXucXac
 * b1: import connect
 * b2: gọi connect
 * b3: viết phương thức mapStateToProps
 * b4: cho mapStateToProps vào làm tham số thứ 1 của connect
 */
const mapStateToProps = (state) => {
  return {
    ketQuaXucXac: state.xucxacReducer.ketQuaXucXac,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BanChoi);
