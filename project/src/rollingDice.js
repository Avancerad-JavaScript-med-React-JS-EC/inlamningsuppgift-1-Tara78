import React, { Component } from 'react';

class RollingDice extends Component{
    hendleClick(){

    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}>Throw the Dice</button>
            </div>
        )
    }
}



export default RollingDice;