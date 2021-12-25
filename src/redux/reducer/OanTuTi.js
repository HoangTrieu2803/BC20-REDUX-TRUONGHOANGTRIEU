import { connect } from "react-redux";

const stateDefault ={
    mangDatCuoc:[
    {
        ma:'keo',
        hinhAnh:'./img/keo.png',
        datCuoc: false,
    },
    {
        ma:'bua',
        hinhAnh:'./img/bua.png',
        datCuoc: false,
    },
    {
        ma:'bao',
        hinhAnh:'./img/bao.png',
        datCuoc: true,
    },
    ],
    ketQua:"I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer:{ 
        ma:'bao',
        hinhAnh:'./img/bao.png',
    }
}
const BaiTapOanTuTiReducer = (state= stateDefault, action)=>{
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO':
        {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item)=>{
                if(item.ma === action.maCuoc){
                    return{...item,datCuoc:true}
                }
                return{...item,datCuoc:false};
            })
            state.mangDatCuoc = mangCuocUpdate;
            return{...state};
        }
        case 'RANDOM':
        {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien;
            return{...state}
        }
        case 'END_GAME':
        {
            state.soBanChoi += 1;
            let player ={...state.mangDatCuoc.find(item => item.datCuoc ===true)};
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if(computer.ma ==='keo'){
                        state.ketQua = "Hoa";
                    }else if(computer.ma ==='bua'){
                        state.ketQua = "Thua";
                    }else{
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    }
                    break;
                case 'bua':
                    if(computer.ma ==='keo'){
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    }else if(computer.ma ==='bua'){
                        state.ketQua = "Hoa";
                    }else{
                        state.ketQua = "Thua"
                    }
                    break;
                case 'bao':
                    if(computer.ma ==='keo'){
                        state.ketQua = "Thua";
                    }else if(computer.ma ==='bua'){
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang += 1;
                    }else{
                        state.ketQua = "Hoa"
                    }
                    break;
                default: state.ketQua = "I'm iron man, i love you 3000 !!!"
                    break;
                return{...state};
            }
        }
        default:  return{...state}
    }
}

export default BaiTapOanTuTiReducer;