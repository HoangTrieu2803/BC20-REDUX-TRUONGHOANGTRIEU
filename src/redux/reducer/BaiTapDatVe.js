import { DAT_GHE, HUY_GHE } from "../type";

const stateDefault ={
    danhSachGheDangDat:[
        
    ]
}
const BaiTapDatVeReducer = (state = stateDefault,action) =>{
    switch (action.type) {
        case DAT_GHE:{
            let danhSachGheDangDat = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if(index != -1){
                danhSachGheDangDat.splice(index,1);
            }else{
                danhSachGheDangDat.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDat;
            return{...state}
            break;
        }
        case HUY_GHE:{
            let danhSachGheDangDat = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)
            if(index != -1){
                danhSachGheDangDat.splice(index,1);
            }
            state.danhSachGheDangDat = danhSachGheDangDat;
            return{...state}
            break;
        }
        default: return{...state}
            break;
    }
}
export default BaiTapDatVeReducer;