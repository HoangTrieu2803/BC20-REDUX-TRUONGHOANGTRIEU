import { combineReducers } from "redux";
import BaiTapOanTuTiReducer from "./reducer/OanTuTi";
import BaiTapDatVeReducer from "./reducer/BaiTapDatVe";
const rootReducer = combineReducers({
    BaiTapOanTuTiReducer,
    BaiTapDatVeReducer
});
export default rootReducer;