import React, { Component } from 'react'
import {connect} from 'react-redux'
class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()}{
            0% {top:-30px}
            25%{top:30px}
            50% {top:-30px}
            75%{top:30px}
            100% {top:0}
        }`
        return (
            <div style={{position:'relative'}}>   
                 <div className='player'>
                     <style>
                         {keyframe}
                     </style>
                <div className='theThink' style={{position:'relative'}}>
                <img style={{position:'absolute',left:'30%',animation:`randomItem${Date.now()} 1s`}} className='mt-3' width={50} height={50} src={this.props.computer.hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{width:200, height:200}} src='./img/playerComputer.png' alt='computer'/>

                
            </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        computer : state.BaiTapOanTuTiReducer.computer
    }
}
export default connect(mapStateToProps)(Computer)