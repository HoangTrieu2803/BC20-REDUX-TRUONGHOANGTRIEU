import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/action'
class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>

                <div className='mt-5'>
                    <button className='gheDuocChon'></button><span className='text-light' style={{ fontSize: '30px' }}>Ghe da dat</span>
                    <br />
                    <button className='gheDangChon'></button><span className='text-light' style={{ fontSize: '30px' }}>Ghe dang dat</span>
                    <br />
                    <button style={{ marginLeft: '0' }} className='ghe'></button><span className='text-light' style={{ fontSize: '30px' }}>Ghe chua dat</span>
                </div>

                <div>
                    <table className="table mt-5" border="2">
                        <thead>
                            <tr className='text-light' style={{fontSize:'35px'}}>
                                <th scope="col">So ghe</th>
                                <th scope="col">Gia</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                        {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia}</td>
                                <td><button onClick={()=>{
                                    this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                }} className='btn btn-danger'>X</button></td>
                            </tr>
                        })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tong tien</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia;
                                },0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTinDatGhe);