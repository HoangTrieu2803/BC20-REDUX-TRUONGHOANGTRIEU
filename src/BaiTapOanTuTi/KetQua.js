import React, { Component } from 'react'
import {connect} from 'react-redux'
class KetQua extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'>{this.props.ketQua}</div>
                <div className='display-4 text-success'>So ban thang: <span className='display-4 text-warning'>{this.props.soBanThang}</span></div>
                <div className='display-4 text-success'>Tong so ban choi: <span className='display-4 text-warning'>{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        ketQua: state.BaiTapOanTuTiReducer.ketQua,
        soBanThang : state.BaiTapOanTuTiReducer.soBanThang,
        soBanChoi : state.BaiTapOanTuTiReducer.soBanChoi,

    }
}
export default connect(mapStateToProps)(KetQua);