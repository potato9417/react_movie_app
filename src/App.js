import React from 'react';
import PropTypes from "prop-types";

function Animal({name,image,rating}){
  return <div>
    <h3>I love {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src={image} alt={name}/>
  </div>
}

// function Food(props){
//   console.log(props)
//   return <h3>I Love {props.name}</h3>
// }


class App extends React.Component {
  state={
    number :0
  }
  plus=()=>{
    console.log("plus")
  }
  minus=()=>{
    console.log("minus");
  }
  render(){
    // render은 method
    return (
      <div>
        <h1>The number is : {this.state.number}</h1>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }

}

export default App;
