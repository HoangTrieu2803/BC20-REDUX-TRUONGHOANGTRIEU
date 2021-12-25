import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachHangGhe from '.././Data/danhSachGhe.json'
import {Link} from 'react-router-dom'
export default class DatVeXemPhim extends Component {
    renderHangGhe = () =>{
        return danhSachHangGhe.map((hangGhe,index)=>{
            return <div key={index}>
                 <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }
    render() {
        return (
            <div className='bookingMovie' style={{position:'fixed',width:'100%',height:'100%',backgroundImage:'url(./img/bgmovie.jpg)',backgroundSize:'100%'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.5)',position:'fixed',width:'100%',height:'100%'}}>
                    <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8'>
                            <h2 className='text-warning text-center'>DAT VE XEM PHIM CYBERLEARN.VN</h2>
                            <div className='mt-2 text-light text-center' style={{fontSize:'25px'}}>Man hinh</div>
                            <div className='mt-1' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                
                                <div className='screen ml-5'></div>
                                {this.renderHangGhe()}
                            </div>
                            <Link to="/" className='btn btn-danger text-left'>  =BaiTapOanTuTi</Link>
                        </div>
                        
                        <div className='col-4'>
                        <h3 className='text-light mt-2'>DANH SACH GHE CHON</h3>
                        <ThongTinDatGhe/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
