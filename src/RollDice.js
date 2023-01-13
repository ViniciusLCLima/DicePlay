import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component{
    static defaultProps = {
        dieFaces: ['one','two','three','four','five','six']
    }
    state = {
        die1Face: 'fas fa-dice-one',
        die2Face: 'fas fa-dice-one',
        isRolling: false
    }

    roll = e =>{
        let num = Math.floor(Math.random()*6)
        let num2 = Math.floor(Math.random()*6)
        this.setState({die1Face: 'fas fa-dice-'+ this.props.dieFaces[num],
        die2Face: 'fas fa-dice-'+ this.props.dieFaces[num2],
        isRolling: true
        })
        setTimeout(() => {
        this.setState({isRolling:false})
        }, 1000);
    };
    
    render(){
        let content;
        if (this.state.isRolling){
            content = (
            <div>
                <div>
                    <Die face={this.state.die1Face} anim="vibrate"/>
                    <Die face={this.state.die2Face} anim="vibrate" />
                </div>
                <button className='RollDice-btn' disabled>Rolling...</button>
            </div>)
        } else{
            content =(
            <div>
                <div>
                    <Die face={this.state.die1Face} />
                    <Die face={this.state.die2Face} />
                </div>
                <button className='RollDice-btn'onClick={this.roll}>Roll</button>
            </div>
            )
        }
        return <main>
            {content}
        </main>
    }
}

export default RollDice;