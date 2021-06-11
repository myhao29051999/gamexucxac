// const action = {
//   type: "XU_LY_BAN_CHON",
//   payload: taiOrXiu,
// };
import { XU_LY_BAN_CHON } from "../reducers/constants/xucXacConstant";
//action creator
export const xuLyBanChonAction = (taiOrXiu) => {
  return {
    type: XU_LY_BAN_CHON,
    payload: taiOrXiu,
  };
};
