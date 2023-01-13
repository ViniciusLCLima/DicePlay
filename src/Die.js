import React, { Component } from 'react';
import './Die.css'

class Die extends Component{
    render(){
        return <i className={this.props.face+' Die '+this.props.anim}></i>
    }
}

export default Die;