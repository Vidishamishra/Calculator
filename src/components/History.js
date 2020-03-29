import React from 'react';
import './History.css';
  class History extends React.Component{

    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=";
    }

      render(){
          return (
            <div className="history"
            onClick = {()=>this.props.handleClick()}
            >
               {this.props.children}
            </div>
          );
      }
  }

export default History;