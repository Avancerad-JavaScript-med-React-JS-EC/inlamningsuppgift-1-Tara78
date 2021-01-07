
import './App.css';
import React from 'react'; 
import RollingDice from 'rollingDice'


class App extends React.Component{
  constructor(){
    super(); 
    this.state={
      diceValue:[1,2,3,4,5,6], 
    
      
    }
    
  }
  render(){
    return(
      <div>
<RollingDice diceValueProp={this.state.diceValue}/>
      </div>
    )

  }
}
 
export default App;
