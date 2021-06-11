import { XU_LY_BAN_CHON } from "../reducers/constants/xucXacConstant";
import { getRandomInt } from "../../utils/random";

//6 mặt của xúc xắc
const xucXacMau = [
  {
    ma: 1,
    hinhAnh: "./img/gameXucXac/1.png",
    soDiem: 1,
  },
  {
    ma: 2,
    hinhAnh: "./img/gameXucXac/2.png",
    soDiem: 2,
  },
  {
    ma: 3,
    hinhAnh: "./img/gameXucXac/3.png",
    soDiem: 3,
  },
  {
    ma: 4,
    hinhAnh: "./img/gameXucXac/4.png",
    soDiem: 4,
  },
  {
    ma: 5,
    hinhAnh: "./img/gameXucXac/5.png",
    soDiem: 5,
  },
  {
    ma: 6,
    hinhAnh: "./img/gameXucXac/6.png",
    soDiem: 6,
  },
];
const initialState = {
  banChon: true, //true là tài, false là xỉu
  tongSoBanChoi: 0,
  soBanThang: 0,
  ketQuaXucXac: [
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
  ],
};
const xucxacReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case XU_LY_BAN_CHON: {
      state.banChon = payload;
      // return state; // sai vì bị tham chiếu với object state cũ
      //để tạo props mới cho component thì phải tạo 1 object mới trả về
      return { ...state }; //setState
    }
    case "LAC_XUC_XAC": {
      // console.log("lac xuc xac");
      const newKetQuaXucXac = [
        xucXacMau[getRandomInt(6)],
        xucXacMau[getRandomInt(6)],
        xucXacMau[getRandomInt(6)],
      ];
      state.ketQuaXucXac = newKetQuaXucXac;
      return { ...state }; //trả về object state mới
    }
    case "XU_LY_KET_QUA": {
      const { ketQuaXucXac, banChon } = state;
      //tổng điểm với reduce
      const tongDiem = ketQuaXucXac.reduce((tong, xucxac) => {
        return (tong += xucxac.soDiem);
      }, 0);
      //xét coi kết quả là tài hay xỉu
      let taiOrXiu;
      if (tongDiem >= 3 && tongDiem <= 10) {
        taiOrXiu = false; //xỉu
      } else {
        taiOrXiu = true; //tài
      }
      //so sánh với cái mình đã chọn
      if (banChon === taiOrXiu) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      //return lại state mới để nó render lại giao diện (có thể hiểu là setState)
      return { ...state };
    }
    default:
      return state;
  }
};
export default xucxacReducer;
