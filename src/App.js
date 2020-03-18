import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      input : "",
      previousNumber : "",
      currentnumber : "",
      operator : ""
    };
  }

    addToInput = val =>{
      this.setState({
        input : this.state.input + val
      });
    }

    addZeroToInput = val =>{
      if(this.state.input !== ""){
        this.setState({
          input : this.state.input + val
        });
      }
    }

    addDecimalPoint = val =>{
      if(this.state.input.indexOf(".") === -1){
        this.setState({
          input : this.state.input + val
        });
      }
    }

    clearInput = () =>{
      this.setState({
        input : ""
      });
    }

   add = () =>{
     this.state.previousNumber = this.state.input;
     this.setState({
       input : "",
       operator : "plus"
     })
   }

   subtract = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({
      input : "",
      operator : "minus"
    })
   }

   multiply = () =>{
     this.state.previousNumber = this.state.input;
     this.setState({
       input : "",
       operator : "star"
     })
   }
  
   divide = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({
      input : "",
      operator : "slash"
    })
   }

   evaluateExpression = ()=>{
    this.state.currentnumber = this.state.input
    let ans;
    
     if(this.state.operator == "plus"){
      ans = parseFloat(this.state.currentnumber) + parseFloat(this.state.previousNumber)

      
     }
     else if(this.state.operator == "minus"){
      ans = parseFloat(this.state.previousNumber)-parseFloat(this.state.currentnumber)  
     }
     else if(this.state.operator == "star"){
      ans = parseFloat(this.state.previousNumber)*parseFloat(this.state.currentnumber)  
     }
     else if(this.state.operator == "slash"){
      ans = parseFloat(this.state.previousNumber)/parseFloat(this.state.currentnumber)  
     }
     this.setState({
      input : ans
    })
   }

  render(){
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="row">
        <Input>{this.state.input}</Input>
        </div>
        <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClear={this.multiply}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addDecimalPoint}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluateExpression}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
        </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>
              clear
            </ClearButton>
          </div>
      </div>
    </div>
  );
  }
}

export default App;
