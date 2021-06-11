import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    const { banChon, tongSoBanChoi, soBanThang } = this.props;
    return (
      // React.Fragment là thẻ ảo k hiển thị bên ngoài html = thẻ trống không(thẻ ảo) => có nhiệm vụ bao mấy cái thẻ html lại cho đúng vs cú pháp return về 1 thẻ của reactjs
      <>
        <div>
          bạn chọn :{" "}
          <span classname="text-danger">{banChon ? "Tài" : "Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span classname="text-success">{soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span classname="text-warning">{tongSoBanChoi}</span>
        </div>
      </>
    );
  }
}
//lấy state từ store về component
//mapStateToProps có nghĩa là: chuyển đổi state trên store thành props của component
const mapStateToProps = (state) => {
  return {
    // key là props của component :  value là state trên store
    tenDatDai: state,
    banChon: state.xucxacReducer.banChon,
    soBanThang: state.xucxacReducer.soBanThang,
    tongSoBanChoi: state.xucxacReducer.tongSoBanChoi,
  };
};
export default connect(mapStateToProps)(KetQua);
