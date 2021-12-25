import React, { Component } from 'react'
import './OanTuTi.css'
import Computer from './Computer'
import Player from './Player'
import KetQua from './KetQua'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
class OanTuTi extends Component {
    render() {
        return (
            <div className='game'>
                <div className='row text-center mt-3'>
                    <div className='col-4'>
                        <Player/>
                    </div>
                    <div className='col-4'>
                        <KetQua/>
                        <button onClick={()=>{
                            this.props.playGame()
                        }} className='btn btn-success p-2 display-4 mt-5'>Play Game</button>
                    </div>
                    <div style={{position:'relative'}} className='col-4'>
                        <Computer/>
                        <Link className='btn btn-success' to="/movie" style={{position:'absolute',bottom:'-300px'}}>BaiTapDatVe =></Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        playGame: ()=>{
            let count = 0;
            let randomItem = setInterval(()=>{
                dispatch({
                    type:'RANDOM'
                })
                count++;
                if(count >100){
                    clearInterval(randomItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100) 

        }
    }
}
export default connect(null,mapDispatchToProps)(OanTuTi);