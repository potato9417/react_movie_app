import React from "react";

class App extends React.Component {
  state={
    number :0
  }
  plus=()=>{
    this.setState(current=>({number : current.number+1}))
  }
  minus=()=>{
    this.setState({number : this.state.number-1})
  }
  // plus함수 minus함수 처럼 두개다 사용가능 하지만 this.state처럼 state에 저장된 값을 불러오는것은 좋지않아
  // react에서 제공해주는 현재값을 이용하여 사용하는것이 좋다 (plus방법으로 사용하길 권장) 

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
