import React, { Component } from 'react'
import {connect} from 'react-redux';
import { datGheAction } from '../redux/action';
class HangGhe extends Component {
    renderGhe = () =>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
            let cssGheDaDat = "";
            let disabled = false;
            //Ghe da dat
            if(ghe.daDat){
                cssGheDaDat = "gheDuocChon"
                disabled = true;
            }

            //Ghe dang dat
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            let cssgheDangChon = '';
            {
                if (indexGheDangDat != -1){
                    cssgheDangChon = 'gheDangChon'
                }
            }

            return <button onClick={()=>{
                this.props.datGhe(ghe);
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssgheDangChon}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () =>{
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button key={index} className='rowNumber'>{hang.soGhe}</button>
        })
    }
    renderHangGhe = () =>{
        if(this.props.soHangGhe === 0){
            return <div className='ml-3'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }else{
            return <div>
            {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
        }
       
    }
    render() {
        return (
            <div className='text-left text-light ml-5 mt-3'>
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        datGhe: (ghe) =>{
            dispatch(datGheAction(ghe))
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);