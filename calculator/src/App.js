import React, {Component} from 'react';
import logo from './logo.svg';
import Keypad from './components/Keypad/Keypad';
import './App.css';

class App extends Component{
  constructor(props, ...rest){
    super(props, ...rest);
    this.state = {
        operation_object : {},
        num1 : 0,
        num2 : 0
    };
  }

 retrieveKeypadData = (num1, num2, obj) =>{
   console.log(num1, num2, obj)
  //  this.setState({
  //    num1 : num1,
  //    num2 : num2,
  //    operation_object : obj
  //  })
 }

  render(){
     return (
        <div className="App">
          <Keypad sendData = {this.retrieveKeypadData}/>
        </div>
      );
  }

}

App.propTypes = {};
export default App;
